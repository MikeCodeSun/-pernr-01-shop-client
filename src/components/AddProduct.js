import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../features/productsSlice";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState(0);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !image || price === 0 || stock === 0) {
      window.alert("Value must not be empty and price not be 0");
    } else {
      dispatch(createProduct({ name, price, description, image, stock }));
      setName("");
      setPrice(0);
      setDescription("");
      setImage("");
      setStock(0);
    }
  };

  return (
    <>
      <form>
        <div className="title">
          <h3>Add new Product</h3>
          <div className="title-underline"></div>
        </div>

        {/* {alert && Object.keys(error).length > 0 && (
      <div className="form-control">
        {Object.values(error).map((err, index) => {
          return (
            <div className="alert alert-danger" key={index}>
              {err}
            </div>
          );
        })}
      </div>
    )} */}

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
          <button className="btn btn-hipster btn-block" onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
    </>
  );
}
