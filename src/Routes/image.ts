import express from 'express';
import imageProcess from '../controllers/image';
const imagerout = express.Router();

imagerout.get('/', imageProcess);

export default imagerout;
