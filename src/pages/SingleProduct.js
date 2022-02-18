import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../features/productSlice";
import { Link } from "react-router-dom";
import AddCart from "../components/AddCart";
import ProductRating from "../components/ProductRating";
import ReviewInput from "../components/ReviewInput";
import ReviewList from "../components/ReviewList";

export default function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, reviews } = useSelector((state) => state.product);

  // console.log(reviews);
  useEffect(() => {
    dispatch(getProduct(id));
  }, [id]);

  // console.log(product);

  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <>
      <Link to="/">back to home</Link>
      {product && (
        <section className="singleProduct-page">
          <div className="singleProduct-container">
            <img
              src={product.image}
              alt={product.name}
              className="img singleProduct-img"
            />
            <div className="singleProduct-info">
              <h4>{product.name}</h4>
              <h5>${product.price}</h5>
              <p>{product.description}</p>
              <ProductRating avg={product.avg} count={product.count} />
            </div>
            <AddCart product={product} />
          </div>
          <div className="singleProduct-review">
            <ReviewList reviews={reviews} />
            <ReviewInput id={id} />
          </div>
        </section>
      )}
    </>
  );
}
