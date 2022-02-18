import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

export default function AddCart({ product }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log([...Array(product.stock).keys()]);
  // console.log(qty);
  return (
    <>
      <section className="addCart-container">
        <div className="addCart-info">
          <p>${product.price}</p>
          {product.stock === 0 ? (
            <p className="addCart-notStock">out stock</p>
          ) : (
            <select
              name="qty"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            >
              {[...Array(product.stock).keys()].map((i) => {
                return (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
          )}
        </div>
        {product.stock === 0 ? (
          <p className="addCart-notStock">unavaliable</p>
        ) : (
          <button
            className="btn btn-block add-btn"
            onClick={() => {
              dispatch(addCart({ ...product, qty }));
              navigate("/cart");
            }}
          >
            Add to Cart
          </button>
        )}
      </section>
    </>
  );
}
