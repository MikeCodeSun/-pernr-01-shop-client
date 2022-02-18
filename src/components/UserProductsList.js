import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductRating from "./ProductRating";
import { useNavigate, useParams } from "react-router-dom";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import { getProducts } from "../features/productsSlice";

export default function UserProductsList() {
  const { products } = useSelector((state) => state.products);
  const { id: user_id } = useParams();
  // console.log(user_id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <div className="products-container">
        {products &&
          products
            .filter((item) => item.creator_id === Number(user_id))
            .slice()
            .reverse()
            .map((product) => {
              const {
                id,

                name,
                price,
                image,

                avg,
                count,
              } = product;
              return (
                <article key={id} className="product-card">
                  <img
                    src={image}
                    alt=""
                    className="img product-img"
                    onClick={(e) => {
                      navigate(`/product/${id}`);
                    }}
                  />
                  <div className="product-info">
                    <h3>{name}</h3>
                    <h5>${price}</h5>
                    <ProductRating count={count} avg={avg} />
                    <div className="btn-container">
                      {/* <button
                        className="btn delete-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(deleteProduct(id));
                        }}
                      >
                        delete
                      </button> */}
                      <DeleteBtn id={id} />
                      <EditBtn product={product} />
                    </div>
                  </div>
                </article>
              );
            })}
      </div>
    </>
  );
}
