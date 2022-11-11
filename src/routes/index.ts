import express from 'express';
import imageProcess from './api/imageProcess';

const routes = express.Router();
routes.get('/', (_req: express.Request, res: express.Response): void => {
  res.send('<h1>Welcome to my image-processing-api</h1>');
});
routes.use('/resize', imageProcess);

export default routes;
