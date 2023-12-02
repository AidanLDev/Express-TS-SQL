import { IProduct } from "./../../interfaces/product";
import { config } from "../database/dbconfig";
import sql from "mssql";
import { getByName } from "../database/sprocs/sprocList";

const poolPromise = sql.connect(config);

export async function getProductByName(product: {
  productName: string;
}): Promise<IProduct[][] | []> {
  console.log("productName: ", product);
  try {
    let pool = await poolPromise;
    let products = await pool
      .request()
      .input("ProductName", sql.NVarChar(255), product.productName)
      .query(`EXECUTE ${getByName} @ProductName`);
    return products.recordsets as IProduct[][];
  } catch (err) {
    console.error("Error executing Product.GetProductByName query: ", err);
    throw err;
  }
}
