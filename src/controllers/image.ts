import { Request, Response } from 'express';
import checkIfImagesExist from '../utils/checkIfImagesExist';
import resizeController from '../utils/resizeController';

const imageresize = async (req: Request, res: Response): Promise<any> => {
  // console.log(req.query);
  const width: number = parseInt(req.query.width as string, 10);
  const height: number = parseInt(req.query.height as string, 10);
  const filename: string = req.query.filename as string;

  try {
    // check if the image exists or not
    const isImageExist = await checkIfImagesExist(width, height, filename);
    // check if exist return if not process the image with target configuration
    if (!isImageExist) {
      // resize image to target #{width}, #{height} and export it to thumbnails folder
      await resizeController(width, height, filename);
    }

    res.status(200).json({
      width,
      height,
      thumbnail: `${filename}_${width}_${height}.jpg`,
    });
  } catch (err) {
    console.log(err);
  }
};
export default imageresize;
