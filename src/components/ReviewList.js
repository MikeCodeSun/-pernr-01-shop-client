import React from "react";
import ProductRating from "./ProductRating";

export default function ReviewList({ reviews }) {
  return (
    <>
      <section className="review-list">
        {reviews
          .slice()
          .reverse()
          .map((review) => {
            const { id, content, created_at, creator, rating } = review;
            return (
              <article className="review" key={id}>
                <p>{creator}</p>
                <ProductRating avg={rating} count={1} />
                <p>{content}</p>
              </article>
            );
          })}
      </section>
    </>
  );
}
