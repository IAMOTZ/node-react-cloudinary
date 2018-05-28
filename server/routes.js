import express from 'express';
import { parseImageUpload } from './middlewares';
import { uploadImage } from './cloudinary';

const router = express.Router();

/* Serving index.html to the browser */
router.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, '..', 'public', 'index.html'));
});

/* Handling image upload */
router.post('/image', parseImageUpload(), (req, res) => {
  if (req.file) { /* Check if there is an image */
    uploadImage(req.file) /* If there is an image, upload it */
      .then((result) => { /* If the upload is successful */
        res.status(201).json({ /* Send back a success response */
          status: 'success',
          imageCloudData: result
        });
      })
      .catch((error) => { /* If there is an error uploading the image */
        res.status(400).json({ /* Send back an error response */
          status: 'error',
          message: error.message
        });
      });
  } else { /* If there is no image  */
    res.status(400).json({ /* Send back a failure message */
      status: 'failed',
      message: 'No image file was uploaded'
    });
  }
});

export default router;