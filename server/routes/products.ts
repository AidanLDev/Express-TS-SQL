import express, { Request, Response } from "express";
import { getProducts } from "../controllers/getAllProducts";
import { insertProduct } from "../controllers/insertProduct";
import { IProduct } from "../../interfaces/product";
import { getProductByName } from "../controllers/getProductByName";

// For env file

const router = express.Router();

router.get("/all", async (req: Request, res: Response) => {
  const products = await getProducts();
  res.json(products[0] || []);
});

router.post("/insert", async (req: Request, res: Response) => {
  const product: IProduct = req.body;
  const products = await insertProduct(product);
  res.json(products[0] || []);
});

router.post("/getByName", async (req: Request, res: Response) => {
  console.log("firing /getByName: ", req.body);
  const productName: { productName: string } = req.body;
  console.log(productName);
  const product = await getProductByName(productName);
  res.json(product[0] || []);
});

export default router;
