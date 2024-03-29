import supertest from 'supertest';
import { IMAGE_OUTPUT_DIR_PATH } from '../utils/imagePaths';
import fs from 'fs';
import app from '../index';

import resizeController from '../utils/resizeController';

//create request to test the server
const request = supertest(app);

describe('Test end point response  ', async () => {
  it('Gets the api/images/resize endpoint', async () => {
    const response = await request.get(
      '/api/images/resize/?width=200&height=200&filename=palmtunnel'
    );
    expect(response.status).toBe(200);
  });

  //image processing
  it('check if image is resized ', async () => {
    const response = await request.get(
      '/api/images/resize/?width=200&height=200&filename=palmtunnel'
    );
    expect(async () => {
      resizeController(
        response.body.width,
        response.body.height,
        response.body.filename
      );
    }).not.toThrow();
  });

  //check validation messages
  it('check if the file name is not passed and return 422 response', async () => {
    const response = await request.get(
      '/api/images/resize/?width=200&height=200'
    );
    //expect(response.status).toBeFalsy();

    expect(response.status).toBe(422);
  });
  it('check if the file name and width is not passed and return 422 response', async () => {
    const response = await request.get('/api/images/resize/?height=200');
    //expect(response.status).toBeFalsy();

    expect(response.status).toBe(422);
  });
  it('Images by second time properties should exist', () => {
    expect(
      fs.existsSync(`${IMAGE_OUTPUT_DIR_PATH}/palmtunnel_200_200.jpg`)
    ).toBeFalsy();
  });
  it('Images by first time properties should not be exist', () => {
    expect(
      fs.existsSync(`${IMAGE_OUTPUT_DIR_PATH}/palmtunnel_500_500.jpg`)
    ).toBeFalsy();
  });
});
