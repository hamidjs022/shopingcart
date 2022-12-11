import React from "react";

function Product(props) {
  const { product, onAdd, onRemove, item } = props;

  return (
    <div className="">
      <img
        className="m-4 shadow p-1 mb-1"
        style={{ width: "150px", height: "150px", borderRadius: "5px" }}
        src={product.image}
        alt="product"
      />
      <h4>{product.name}</h4>
      <h4>${product.price}</h4>
      {item ? (
        <div>
          <button onClick={() => onRemove(item)} className="btn btn-outline-danger btn-sm">
            -
          </button>
          <span className="p-1">{item.qty}</span>
          <button onClick={() => onAdd(item)} className="btn btn-outline-success btn-sm">
            +
          </button>
        </div>
      ) : (
        <button
          className="btn btn-sm btn-success mx-5 shadow"
          onClick={() => onAdd(product)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default Product;
