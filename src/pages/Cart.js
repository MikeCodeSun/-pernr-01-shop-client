import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getTotal, deleteCart } from "../features/cartSlice";

export default function Cart() {
  const { cart, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // console.log(cart);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  return (
    <>
      <Link to="/">back to home</Link>
      <ul className="cart-container">
        {cart.length === 0 ? (
          <h2 className="cart-title">No item in cart</h2>
        ) : (
          cart.map((item) => {
            const { id, image, name, price, qty } = item;
            return (
              <li className="cart-item" key={id}>
                <Link to={`/product/${id}`}>
                  <img src={image} alt={name} className="img cart-img" />
                </Link>
                <button
                  className="btn delete-cart"
                  onClick={() => dispatch(deleteCart(id))}
                >
                  delete
                </button>
                <p>{name}</p>
                <p>{qty}</p>
                <p>${price}</p>
              </li>
            );
          })
        )}
      </ul>
      <div className="cart-total">
        <h5>total:</h5>
        <h3>${total}</h3>
      </div>
    </>
  );
}
