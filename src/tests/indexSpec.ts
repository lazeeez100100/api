import supertest from 'supertest';
import app from '../index';
const request = supertest(app);
describe('GET /', (): void => {
  it('respond have 200 number', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
