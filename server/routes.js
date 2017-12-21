import express from 'express';
import { handleImageUpload } from './middlewares';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, '..', 'public', 'index.html'));
});

router.post('/image', handleImageUpload(), (req, res) => {
  // process the image here
})

export default router;