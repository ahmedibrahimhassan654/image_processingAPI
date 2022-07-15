import { Router } from 'express';
import imageresize from '../controllers/image';

import {
  validateMiddleware,
  imageResizeValidationRules,
} from '../middelware/validatorMiddelware';
const imagerout = Router();

imagerout
  .route('/resize')
  .get(imageResizeValidationRules(), validateMiddleware, imageresize);

export default imagerout;
