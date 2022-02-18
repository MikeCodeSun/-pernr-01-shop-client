import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createReview } from "../features/productSlice";

export default function ReviewInput({ id }) {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);
  // console.log(content, rating);

  const dispatch = useDispatch();

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(createReview({ id, rating, content }));
    setContent("");
  };

  return (
    <>
      <form className="form-review">
        <div className="title">
          <h5>write some comment</h5>
          <div className="title-underline"></div>
        </div>
        <div className="form-control">
          <textarea
            className="form-textarea"
            type=""
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="form-control review-btn">
          <div>
            <label htmlFor="rating">Rate:</label>
            <select
              name="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button className="btn" onClick={submitHandle}>
            submit
          </button>
        </div>
      </form>
    </>
  );
}
