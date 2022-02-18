import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { editProduct } from "../features/productsSlice";
import { useDispatch } from "react-redux";

export default function Modal({ setShow, show, product }) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [image, setImage] = useState("");
  const [stock, setStock] = useState(product.stock);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !image || price === 0 || stock === 0) {
      window.alert("Value must not be empty and price not be 0");
    } else {
      dispatch(
        editProduct({ id: product.id, name, image, price, stock, description })
      );

      setName(name);
      setPrice(price);
      setDescription(description);
      setImage("");
      setStock(stock);
      setShow(false);
    }
  };

  return (
    <>
      <div
        className={show ? "show-modal modal-container" : "modal-container"}
        onClick={() => setShow(false)}
      >
        <div className="modal-hero" onClick={(e) => e.stopPropagation()}>
          <button className="btn close-modal" onClick={() => setShow(false)}>
            <FaTimes />
          </button>
          <form style={{ boxShadow: "none", padding: "1rem" }}>
            <div className="title">
              <h3>Edit Product</h3>
              <div className="title-underline"></div>
            </div>

            <div className="form-control">
              <label htmlFor="emai" className="form-label">
                name:
              </label>
              <input
                type="text"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="form-label">
                price:
              </label>
              <input
                type="number"
                className="form-input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label htmlFor="password" className="form-label">
                stock:
              </label>
              <input
                type="number"
                className="form-input"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label htmlFor="image" className="form-label">
                Image:
              </label>
              <input
                type="text"
                className="form-input"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label htmlFor="description" className="form-label">
                description:
              </label>
              <textarea
                type="text"
                className="form-input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-control">
              <button
                className="btn btn-hipster btn-block"
                onClick={handleSubmit}
                style={{ transition: "none" }}
              >
                edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
