import { IProduct } from "../interfaces/product";

export default class Product implements IProduct {
  constructor(
    public Id: number,
    public ProudctName: string,
    public Quantity: number,
    public Price: number
  ) {
    this.Id = Id;
    this.ProudctName = ProudctName;
    this.Quantity = Quantity;
    this.Price = Price;
  }
}
