import React from "react";
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";

export default function ProductRating({ count, avg }) {
  // console.log(count, avg);
  const star = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= avg) {
      star.push(<FaStar />);
    } else if (i === Math.ceil(avg) && !Number.isInteger(Number(avg))) {
      star.push(<FaStarHalfAlt />);
    } else {
      star.push(<FaRegStar />);
    }
  }

  return (
    <div className="rating">
      {star.map((item, index) => {
        return (
          <span className="rating-star" key={index}>
            {item}
          </span>
        );
      })}
      {/* {count === null ? <span>(0)</span> : <span>({count})</span>} */}
      <span>{avg}</span>
    </div>
  );
}
