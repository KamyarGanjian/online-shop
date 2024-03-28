import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import ProductsSection from "./Components/ProductsSection/ProductsSection";
import Toast from "./Components/Toast/Toast";
import Cart from "./Components/Cart/Cart";
import productsContext from "./Context/ProductsContext";
import "./App.css";
import products from "./Data/Products";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [allProducts, setAllProducts] = useState(products);
  const [userCart, setUserCart] = useState([]);
  const [isShowToast, setIsShowToast] = useState(false);
  const [isShowCart, setIsShowCart] = useState(false);

  return (
    <div>
      <productsContext.Provider value={{
        allProducts,
        setAllProducts,
        userCart,
        setUserCart,
        isShowToast,
        setIsShowToast,
        isShowCart,
        setIsShowCart
      }}>
        <Navbar />
        <main className="pb-5">
          <div className="container">
            <ProductsSection key={uuidv4} />
          </div>
        </main>
        <Toast />
        <Cart key={uuidv4} />
      </productsContext.Provider>
    </div>
  );
}

export default App;