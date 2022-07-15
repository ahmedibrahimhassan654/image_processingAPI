import supertest from 'supertest';
import { IMAGE_OUTPUT_DIR_PATH } from '../utils/imagePaths';
import fs from 'fs';
import app from '../index';

//create request to test the server
const request = supertest(app);

describe('Test end point response  ', async () => {
  it('Gets the api/images/resize endpoint', async () => {
    const response = await request.get(
      '/api/images/resize/?width=200&height=200&filename=palmtunnel'
    );
    expect(response.status).toBe(200);
  });
  // it('Images by first time properties should not be exist', () => {
  //   expect(
  //     fs.existsSync(`${IMAGE_OUTPUT_DIR_PATH}/palmtunnel_500_500.jpg`)
  //   ).toBeFalsy();
  // });
  // it('Images by second time properties should exist', () => {
  //   expect(fs.existsSync(`${IMAGE_OUTPUT_DIR_PATH}/palmtunnel_200_200.jpg`)).toBeTruthy()
  // })
});
