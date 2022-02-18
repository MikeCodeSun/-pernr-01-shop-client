import React, { useState } from "react";

import DeleteModal from "./DeleteModal";

export default function DeleteBtn({ id }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="btn delete-btn"
        onClick={() => {
          setShowModal(true);
        }}
      >
        delete
      </button>
      <DeleteModal id={id} showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
