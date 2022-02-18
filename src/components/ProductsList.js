import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../features/productsSlice";
import { useNavigate } from "react-router-dom";
import ProductRating from "./ProductRating";

export default function ProductsList() {
  const { products, loading } = useSelector((state) => state.products);
  // console.log(products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <>
      <div className="products-container">
        {products &&
          products.map((product) => {
            const {
              id,
              creator_id,
              name,
              price,
              image,
              description,
              avg,
              count,
            } = product;
            return (
              <article key={id} className="product-card">
                <img
                  src={image}
                  alt=""
                  className="img product-img"
                  onClick={() => {
                    navigate(`/product/${id}`);
                  }}
                />
                <div className="product-info">
                  <h3>{name}</h3>
                  <h5>${price}</h5>
                  <ProductRating count={count} avg={avg} />
                </div>
              </article>
            );
          })}
      </div>
    </>
  );
}
