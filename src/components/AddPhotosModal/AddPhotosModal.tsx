import React, {ChangeEvent, useRef, useState} from 'react';
import {useMutation} from "react-query";
import './AddPhotosModal.scss';

import {createImages} from "actions";
import uploadLogo from 'assets/uploadButton.png'
import DeleteIcon from 'assets/delete.png';
import Modal, {BaseModalProps} from "component-lib/Modal";
import {PostData} from "types/Api";
import {Image as ImageType} from 'types/Image';
import {readFileAsText} from 'utils/file';
import {formatBytes} from "utils/formatters";

const IMAGE_TYPES = ['image/gif', 'image/jpeg', 'image/jpg', 'image/png'];

interface AddPhotosModalProps extends BaseModalProps {
  onImageUpload: (images: ImageType[]) => void;
}

const AddPhotosModal = ({isOpen, onClose, onImageUpload}: AddPhotosModalProps) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [hasNonImageFiles, setHasNonImageFiles] = useState<boolean>(false);
  const [files, setFiles] = useState<PostData<ImageType>[]>([]);

  const postImages = useMutation(createImages);

  const handleClickUploadButton = () => {
    hiddenFileInput?.current?.click();
  }

  const handleDeleteImage = (index: number) => () => {
    const tempFiles = [...files];
    tempFiles.splice(index, 1);
    setFiles(tempFiles);
  }

  const handleFileUploadToBrowser = async (e: ChangeEvent<HTMLInputElement>) => {
    const appendedFiles: File[] = e?.target?.files ? Array.from(e.target.files) : [];
    const filteredFiles = appendedFiles.filter(file => (IMAGE_TYPES.includes(file.type)));

    const parsedFiles: PostData<ImageType>[] = await Promise.all(filteredFiles.map(async filteredFile => {
      const {name, size} = filteredFile;
      return {
        data: await readFileAsText(filteredFile),
        fileName: name,
        size
      }
    }));
    setHasNonImageFiles(filteredFiles.length !== appendedFiles.length ? true : false);
    setFiles([...files, ...parsedFiles])
  }

  const handleOnClose = () => {
    setFiles([]);
    onClose();
  }

  const handleSubmit = async () => {
    try {
      const newFiles = await postImages.mutateAsync(files);
      onImageUpload(newFiles.data);
    } catch (e) {
      return;
    }
  }

  return <Modal
    isSubmitDisabled={files.length === 0}
    isOpen={isOpen}
    onClose={handleOnClose}
    onSubmit={handleSubmit}
    title="Upload Photos">
      <div className="AddPhotosModal">
        <div className="AddPhotosModal__upload-container">
          <img
            alt="upload"
            className="AddPhotosModal__upload"
            onClick={handleClickUploadButton}
            src={uploadLogo}
            title="Click to upload images!"
          />
          {hasNonImageFiles &&
            <div className="text--danger">
              Non-image type files ({IMAGE_TYPES.join(', ')}) have been removed, please only upload images.
            </div>}
        </div>
        <input type="file" ref={hiddenFileInput} style={{display: 'none'}} onChange={handleFileUploadToBrowser} multiple/>

        <div className="AddPhotosModal__content">
          {files.map(({data, fileName, name, size}, index) => {
            return <div key={index} className="AddPhotosModal__file-container">
              <img className="AddPhotosModal__file-preview" src={data} />
              <div className="AddPhotosModal__file-details">
                <div>{fileName}</div>
                <div>{formatBytes(size)}</div>
              </div>
                <img className="AddPhotosModal__file-delete" src={DeleteIcon} onClick={handleDeleteImage(index)}/>
            </div>
          })}
        </div>
      </div>
  </Modal>
}

export default AddPhotosModal;
