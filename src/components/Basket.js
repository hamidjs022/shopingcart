
import React from "react";

function Basket(props) {
  const { onAdd, onRemove, cartItems } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 200;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
   <container div className="container">
    <aside className="row col bg-secondary ms-auto mt-0 ">
      <h2>cartItems</h2>
      <div>
        {cartItems.length === 0 && <div>cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
          <div className="col-1">{item.name}</div>
          <div className="col-1">
            <button onClick={() => onRemove(item)} className="btn btn-outline-danger btn-sm">
            -
          </button>
          <button onClick={() => onAdd(item)} className="btn btn-outline-info btn-sm">
            +
          </button>
          </div>
          <div className="col-1 text-end">
            {item.qty}X ${item.price.toFixed(2)}
          </div> 
          </div>
        ))}
        {cartItems.length !==0&&(
        <>
        <hr/>
        <div className="row">
          <div className="col-2">items price</div>
          <div className="col-1 text-end">${itemsPrice.toFixed(2)}</div>
        </div>
        <div className="row">
          <div className="col-2">tax price</div>
          <div className="col-1 text-end">${taxPrice.toFixed(2)}</div>
        </div>
        <div className="row">
        <div className="col-2">shipping price</div>
        <div className="col-1 text-end">${shippingPrice.toFixed(2)}</div>
        </div>
        <div className="row">
        <strong className="col-2">Total price</strong>
        </div>
        <div className="col-1 text-end">
        <strong>${totalPrice.toFixed(2)}</strong>
        </div>
       
        <hr/>
        <div className="row">
          <a href="/" className="btn btn-lg" onClick={()=> alert("Implement checkout")}>checkout</a>
        </div>
        </>

        )}
      </div>
    </aside>
    </container>
  );
}

export default Basket;
