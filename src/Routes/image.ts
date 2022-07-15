import { Router } from 'express';
import imageresize from '../controllers/image';
const imagerout = Router();

imagerout.route('/resize').get(imageresize);

export default imagerout;
