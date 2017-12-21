import axios from 'axios';

export const sendImageToServer = (image) => {
  const config = {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  };
  return axios.post(`http://localhost:3000/image`, image, config);
}
