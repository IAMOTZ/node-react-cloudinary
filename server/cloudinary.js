import cloudinary from 'cloudinary';
import dotEnv from 'dotenv';

dotEnv.config();

// Configure cloudinary using your preset enviroment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SERCRET,
});

// This function handle the asynchronous action of uploading an image to cloudinary.
// The cloudinary.v2.uploader.upload_stream is used because we are sending a buffer, 
// which the normal cloudinary.v2.upload can't do. More details at https://github.com/cloudinary/cloudinary_npm/issues/130
export const uploadImage = (image) => {
  const cloudinaryOptions = {
    resource_type: 'raw', 
    format: 'jpg',
    folder: process.env.CLOUDINARY_CLOUD_FOLDER || '',
  }
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload_stream(cloudinaryOptions, function (error, result) {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    }).end(image.buffer);
  });
};
