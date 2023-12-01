import React from 'react';
import { useGetData } from './hooks/useGetData';
import logo from './logo.svg';
import './App.css';
import { IProduct } from "../../interfaces/product";

function App() {
  const getAllTodosUrl = "/products/all";
  const { data, isLoading, serverError } = useGetData<IProduct>(getAllTodosUrl);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {isLoading && <h1>Loading</h1>}
          {serverError && <h1>Something went wrong {serverError.message}</h1>}
          {data &&
            data.map((product) => (
              <p key={`${product.Id}__${product.ProductName}`}>
                {product.ProductName}
              </p>
            ))}
        </div>
      </header>
    </div>
  );
}

export default App;
