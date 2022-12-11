
import "./App.css";
import { useEffect, useState,useTransition } from "react";
import Header from "./components/Header";
import Basket from "./components/Basket";
import Main from "./components/Main";
import data from "./data";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { products } = data;

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    //if we already hve this product in the card/ keep the product and and one ro qty
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };
  const [isPending,startTransition]=useTransition()
  useEffect(() => {
    startTransition(()=>{
      setCartItems(
        localStorage.getItem("cartItems")
          ? JSON.parse(localStorage.getItem("cartItems"))
          : []
      );
    })
   
  }, []);

  return isPending?(<div>Loading...</div>)
  : (
    <div className="container">
      <Header countCartItems={cartItems.length} />

      <Main
        products={products}
        onAdd={onAdd}
        onRemove={onRemove}
        cartItems={cartItems}
      />

      <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
    </div>
  );
}

export default App;
