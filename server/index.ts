import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import cors from "cors";

import todosRouter from "./routes/todos";

// DB imports
import Product from './database/product';
import { getProducts } from './database/dboperations'

// For env file

getProducts().then(res => {
  console.log(res);
})



const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.use("/todo", todosRouter);

app.listen(port, () => {
  console.log(
    `Server has been fired up on nowhere other than http://localhost:${port} itself...`
  );
});
