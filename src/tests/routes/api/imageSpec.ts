import supertest from 'supertest';
import fs from 'fs/promises';
import path from 'path';
import app from '../../../index';
import { Stats } from 'fs';
import imageSize from 'image-size';

const request = supertest(app);

describe('GET /api/resize', () => {
  it('responds 400 if called without parameters', async () => {
    const response = await request.get('/api/resize');
    expect(response.status).toBe(400);
  });

  it('responds 400 if called with no one or more parameter', async () => {
    const response = await request.get('/api/resize?filename=test&height=100');
    expect(response.status).toBe(400);
  });

  it('responds 404 if called as expected but image does not exist', async () => {
    const response = await request.get(
      '/api/resize?filename=test&width=100&height=100'
    );
    expect(response.status).toBe(404);
  });

  it('responds 200 if called as expected and image exist', async () => {
    const response = await request.get(
      '/api/resize?filename=fjord&width=100&height=100'
    );
    expect(response.status).toBe(200);
  });

  it('created a thumb of the image', async () => {
    await request
      .get('/api/resize?filename=fjord&width=100&height=100')
      .then(() => {
        fs.stat(
          path.resolve(__dirname, '../../../../assets/thumb/fjord-100x100.jpg')
        ).then((fileStat: Stats) => expect(fileStat).not.toBeNull());
      });
  });
  it('check for query height and width (image diminution)', async () => {
    await request
      .get('/api/resize?filename=fjord&width=220&height=170')
      .then(() => {
        const dimensions = imageSize(
          path.resolve(__dirname, '../../../../assets/thumb/fjord-220x170.jpg')
        );
        expect(dimensions.height).toEqual(170);
        expect(dimensions.width).toEqual(220);
      });
  });
});
