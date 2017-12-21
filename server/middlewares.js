import multer from 'multer';

const upload = multer();

export const handleImageUpload = (req, res) => {
  return upload.single('image');
};
