import multer from 'multer';

/* Initialize multer */
const upload = multer();

/*
  This middleware would check the form-data coming from the client,
  if there is a single file named 'image', it would make the file 
  available in the server as req.file
  Consequently, (if there is an image uplaod) { req.file === <the image> }
  More details at https://github.com/expressjs/multer
*/
export const parseImageUpload = (req, res) => {
  return upload.single('image');
};
