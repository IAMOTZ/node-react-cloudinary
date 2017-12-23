import multer from 'multer';

// Initialize multer
const upload = multer();

// This middleware would attach a single file with the 
// field name 'image' to the request object as req.file
// More details at https://github.com/expressjs/multer
export const parseImageUpload = (req, res) => {
  return upload.single('image');
};
