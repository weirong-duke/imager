import React, {useEffect, useMemo, useState} from 'react';
import 'pages/App.scss';
import 'styles/index.scss';
import useResizeObserver from "use-resize-observer";
import imagerLogo from 'assets/imagerLogo.png'

import Content from "components/Content";
import AddPhotosModal from "components/AddPhotosModal/AddPhotosModal";
import Button from "component-lib/Button";
import {useQuery} from "react-query";
import {getImages} from "actions";
import {Image as ImageType} from "types/Image";
import {formatGetImageData} from 'utils/formatters';

const IMAGE_WIDTH = 240;
export const GRID_SPACING = 16;
const PAGE_PADDING = 128;
const numImagesForScreenWidth = (width: number) => {
  const useableGridSpace = width - PAGE_PADDING + GRID_SPACING
  return Math.floor(useableGridSpace / (IMAGE_WIDTH + GRID_SPACING))
}

export enum ImageSortOptions {
  Id = "id",
  CreatedDate = 'createdDate'
}

function App() {
  const [isAddPhotosModalOpen, setIsAddPhotosModalOpen] = useState<boolean>(false);
  const [images, setImages] = useState<ImageType[]>([])
  const [imageSort, setImageSort] = useState<ImageSortOptions>(ImageSortOptions.Id)
  const [searchText, setSearchText] = useState<string>('');

  const {data} = useQuery('images', getImages)

  useEffect(() => {
    if (data?.data) {
      setImages(formatGetImageData(data))
    }
  }, [data])


  const {ref: appRef, width: screenWidth} = useResizeObserver<HTMLDivElement>();

  const imagesPerRow = useMemo(() => screenWidth ? numImagesForScreenWidth(screenWidth) : 0, [screenWidth])

  const onImageUpload = (newImages: ImageType[]) => {
    setImages([...images, ...newImages]);
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e?.target.value);
  }

  const sortImages = (imageA: ImageType, imageB: ImageType) => {
    if (imageSort === ImageSortOptions.Id) {
      return 1;
    } else if (imageSort === ImageSortOptions.CreatedDate) {
      if (new Date(imageA.createdAt) > new Date(imageB.createdAt)) {
        return -1;
      } else {
        return 1;
      }
    }
    return 1;
  }

  const toggleModal = () => {
    setIsAddPhotosModalOpen(!isAddPhotosModalOpen);
  }

  const filteredAndSortedImages = images
    .filter(image => image.fileName.includes(searchText))
    .sort(sortImages);

  return (
    <div className="App" ref={appRef}>
      <AddPhotosModal isOpen={isAddPhotosModalOpen} onClose={toggleModal} onImageUpload={onImageUpload} />
      <div className="App__search-banner">
        <img alt="logo" className="App__logo" src={imagerLogo} height={"34px"}/>
        <input className="App__search-bar" onChange={onInputChange} placeholder="Filter by image name..." value={searchText} />
        <Button className="App__upload" onClick={toggleModal} type="submit">Add Photos</Button>
      </div>
      <Content images={filteredAndSortedImages} imagesPerRow={imagesPerRow} setImageSort={setImageSort}/>

    </div>
  );
}

export default App;
