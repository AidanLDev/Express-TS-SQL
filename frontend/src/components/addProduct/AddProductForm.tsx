import { useState } from "react";
import { AddProductInput } from "./AddProductInput";
import axios from "axios";
import { serverUrl } from "../../utils/constants";

export const AddProductForm = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleSubmitProduct = () => {
    if (productName && price && quantity) {
      const productsToSend = {
        ProductName: productName,
        Price: Number(price),
        Quantity: Number(quantity),
      };
      axios
        .post(`${serverUrl}/products/insert`, productsToSend)
        .then((res) => console.log(res))
        .catch((err) => console.error("Failed to insert products: ", err));
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <AddProductInput
        label="Product Name"
        fieldValue={productName}
        fieldValueChangeHandler={setProductName}
      />
      <AddProductInput
        label="Price"
        fieldValue={price}
        fieldValueChangeHandler={setPrice}
      />
      <AddProductInput
        label="Quantity"
        fieldValue={quantity}
        fieldValueChangeHandler={setQuantity}
      />
      <button onClick={() => handleSubmitProduct()}>Add Product</button>
    </div>
  );
};
