import { IProduct } from "./../../interfaces/product";
import { config } from "../database/dbconfig";
import sql from "mssql";
import { getAllProducts, upsertProduct } from "../database/sprocs/sprocList";

const poolPromise = sql.connect(config);

export async function insertProduct(
  product: IProduct
): Promise<IProduct[][] | []> {
  try {
    let pool = await poolPromise;
    await pool
      .request()
      .input("ProductName", sql.NVarChar(255), product.ProductName)
      .input("Price", sql.Decimal(10, 2), product.Price)
      .input("Quantity", sql.Int, product.Quantity)
      .query(`EXECUTE ${upsertProduct} @ProductName, @Price, @Quantity`);
    let products = await pool.request().query(`EXECUTE ${getAllProducts}`);
    return products.recordsets as IProduct[][];
  } catch (err) {
    console.error("Error executing insertProduct query: ", err);
    throw err;
  }
}
