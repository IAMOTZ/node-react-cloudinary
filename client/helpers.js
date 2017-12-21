import axios from 'axios';

// This function does the asynchronous action of sending an image to ther server.
// It returns a promise.
export const sendImageToServer = (image) => {
  const config = {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  };
  return axios.post(`http://localhost:3000/image`, image, config);
}
