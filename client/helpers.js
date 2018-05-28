import axios from 'axios';

/**
 * Handles the asynchronous action of sending an image to the server.
 * @param {File} image The image to send to the server.
 * @returns {Promise} A promise that resolves the resposne from the server.
 */
export const sendImageToServer = (image) => {
  const config = {
    headers: {
      'Content-type': 'multipart/form-data',  /* This content-type must be set when sending form-data */
    },
  };
  return axios.post(`http://localhost:3000/image`, image, config);
}
