import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv';

// For env file
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express server whooo serving up some fresh content');
});

app.listen(port, () => {
  console.log(
    `Server has been fired up on nowhere other than http://localhost:${port} itself...`
  );
});
