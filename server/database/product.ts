import { IProduct } from "../../interfaces/product";

export default class Product implements IProduct {
  constructor(
    public Id: number,
    public ProductName: string,
    public Quantity: number,
    public Price: number
  ) {
    this.Id = Id;
    this.ProductName = ProductName;
    this.Quantity = Quantity;
    this.Price = Price;
  }
}
