import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import cors from "cors";

import productsRouter from "./routes/products";

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(
    `Server has been fired up on nowhere other than http://localhost:${port} itself...`
  );
});
