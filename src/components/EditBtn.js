import React, { useState } from "react";
import Modal from "./Modal";

export default function EditBtn({ product }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className="btn edit-btn"
        onClick={(e) => {
          e.stopPropagation();
          setShow(true);
        }}
      >
        edit
      </button>
      <Modal setShow={setShow} show={show} product={product} />
    </>
  );
}
