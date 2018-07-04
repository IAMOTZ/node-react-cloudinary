import multer from 'multer';

/* 
  Initialize multer. 
  You can also specify multer configuraitons here.
  To limit filesize, you can do something like this:
  multer({
    limits: {
      fileSize: 1 * 1024 * 1024    // Equivalent of 1MB
    }
  });
  NOTE: If you are going to add multer configurations 
  that can lead to errors, ensure to handle the errors properly.
  More details on multer configuration here: https://github.com/expressjs/multer
*/
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
