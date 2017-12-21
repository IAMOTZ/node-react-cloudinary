import express from 'express';
import { parseImageUpload } from './middlewares';
import { uploadImage } from './cloudinary';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, '..', 'public', 'index.html'));
});

router.post('/image', parseImageUpload(), (req, res) => {
  if (req.file) {
    console.log('start uploading')
    uploadImage(req.file)
      .then((result) => {
        res.status(201).json({
          status: 'success',
          imageCloudData: result
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: 'error',
          message: error.message
        });
      });
  } else {
    res.status(400).json({
      status: 'failed',
      message: 'no image file was uploaded'
    });
  }
});

export default router;