import express, { Request, Response } from "express";
import { getProducts } from "../controllers/getAllProducts";
import { insertProduct } from "../controllers/insertProduct";
import { IProduct } from "../../interfaces/product";

// For env file

const router = express.Router();

router.get("/all", (req: Request, res: Response) => {
  return getProducts().then((products) => {
    res.json(products[0] || []);
  });
});

router.post("/insert", (req: Request, res: Response) => {
  const product: IProduct = req.body;
  console.log(product);
  return insertProduct(product).then((products) => {
    res.json(products[0] || []);
  });
});

export default router;
