import { IProduct } from "./../../interfaces/product";
import { config } from "../database/dbconfig";
import sql from "mssql";
import { getAllProducts } from "../database/sprocs/sprocList";

const poolPromise = sql.connect(config);

export async function getProducts(): Promise<IProduct[][] | []> {
  try {
    let pool = await poolPromise;
    let products = await pool.request().query(`EXECUTE ${getAllProducts}`);
    return products.recordsets as IProduct[][];
  } catch (err) {
    console.error("Error executing Product.GetAll query: ", err);
    throw err;
  }
}
