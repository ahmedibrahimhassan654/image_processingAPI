import express from 'express';
const imageProcess = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  res.send('image api');
};
export default imageProcess;
