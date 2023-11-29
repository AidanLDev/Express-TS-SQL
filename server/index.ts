import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from "cors";

import todosRouter from "./routes/todos";

// For env file
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.use('/todo', todosRouter);

app.listen(port, () => {
  console.log(
    `Server has been fired up on nowhere other than http://localhost:${port} itself...`
  );
});
