import { Router } from 'express';
import { uploader } from '../middlewares/multer';
//import { jwtValidator } from '../middlewares/jwt-validator';
import { getImages, uploadImage } from '../controllers/upload';

export const uploadRouter = Router();

//uploadRouter.use(jwtValidator);

uploadRouter.post('/', uploader, uploadImage);
uploadRouter.get('/user/:userId/img/:id', [], getImages);
