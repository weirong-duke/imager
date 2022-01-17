import axiosClient from 'actions';
import {PostData} from "types/Api";
import {Image as ImageType} from 'types/Image';

export const createImages = async (data: PostData<ImageType>[]) => {
  const {data: response} = await axiosClient.post('/images', data);
  return response;
}
