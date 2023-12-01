import { config } from "./dbconfig";
import sql from "mssql";

export async function getProducts() {
  try {
    let pool = await sql.connect(config);
    let products = await pool.request().query("SELECT * FROM Products")
    return products.recordsets;
  } catch (err) {
    console.error('Error connecting to db: ', err);
  }
}
