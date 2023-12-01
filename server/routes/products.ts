import express, { Request, Response } from "express";
import { getProducts } from "../controllers/getAllProducts";

// For env file

const router = express.Router();

router.get("/all", (req: Request, res: Response) => {
  return getProducts().then((products) => {
    res.json(products[0] || []);
  });
});

export default router;
