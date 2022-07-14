import supertest from 'supertest';

import app from '../index';

//create request to test the server
const request = supertest(app);

describe('Test end point response  ', async () => {
  it('should return 200 OK', async () => {
    const response = await request.get('/');
    console.log(response);
  });
});
