import { Router } from 'express';
import { check } from 'express-validator';
import { fieldsValidator } from '../middlewares/fields-validator';
import { jwtValidator } from '../middlewares/jwt-validator';
import { uploadFile } from '../middlewares/uploadFile';

export const uploadRouter = Router();

uploadRouter.use(jwtValidator);

uploadRouter.post(
  '/images/upload',
  [
    check('image').exists().withMessage('No hay imagen para guardar'),
    check('usuario').exists().withMessage('El usuario es Obligatorio'),
    fieldsValidator,
  ],
  uploadFile
);
