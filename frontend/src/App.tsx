import { useGetData } from "./hooks/useGetData";
import "./App.css";
import { AddProductForm } from "./components/addProduct/AddProductForm";
import { IProduct } from "../../interfaces/product";
import { SearchByName } from "./components/SearchByName";
import axios from "axios";
import { serverUrl } from "./utils/constants";

function App() {
  const getAllProducts = "/products/all";
  const { data, isLoading, serverError } = useGetData<IProduct>(getAllProducts);

  const handleDeleteProduct = (productId: number) => {
    axios.post(`${serverUrl}/products/deleteProduct`, { productId });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {isLoading && <h1>Loading</h1>}
          {serverError && <p>Something went wrong {serverError.message}</p>}
          <AddProductForm />
          {data && (
            <>
              <h2>Products</h2>
              <SearchByName />
              {data.map((product) => (
                <div
                  key={`${product?.Id}__${product.ProductName}`}
                  className="Product-Container"
                >
                  <p>Name: {product.ProductName}</p>
                  <p>Price: £{product.Price}</p>
                  <p>Stock: {product.Quantity}</p>
                  <button
                    onClick={() =>
                      product?.Id && handleDeleteProduct(product.Id)
                    }
                  >
                    Delete me
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
