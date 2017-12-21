import multer from 'multer';

const upload = multer();

export const parseImageUpload = (req, res) => {
  return upload.single('image');
};
