import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

app.get('/', (_req: express.Request, res: express.Response): void => {
  res.status(200).send('site working correctly');
});

app.use('/api', routes);

app.listen(port, (): void => {
  console.log(`server is Running on port ${port}`);
});

export default app;
