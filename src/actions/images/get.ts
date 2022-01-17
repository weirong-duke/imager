import axiosClient from 'actions';

export const getImages = async () => {
  const {data: response} = await axiosClient.get('/images');
  return response;
}
