import { IProduct } from "./../../interfaces/product";
import { config } from "../database/dbconfig";
import sql from "mssql";
import { deleteProduct } from "../database/sprocs/sprocList";

const poolPromise = sql.connect(config);

export async function deletProductById(product: {
  productId: number;
}): Promise<IProduct[][] | []> {
  console.log("ProductId: ", product.productId);
  try {
    let pool = await poolPromise;
    let products = await pool
      .request()
      .input("ProductId", sql.BigInt, product.productId)
      .query(`EXECUTE ${deleteProduct} @ProductId`);
    return products.recordsets as IProduct[][];
  } catch (err) {
    console.error("Error executing Product.DeleteProductById query: ", err);
    throw err;
  }
}
