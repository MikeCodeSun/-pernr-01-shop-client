import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../features/productsSlice";

export default function DeleteModal({ id, showModal, setShowModal }) {
  const dispatch = useDispatch();
  return (
    <>
      {/* <button
        className="btn delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(deleteProduct(id));
        }}
      >
        delete
      </button> */}
      <div
        className={
          showModal ? "delete-modal show-delete-modal" : "delete-modal"
        }
        onClick={() => setShowModal(false)}
      >
        <div className="delete-modal-hero" onClick={(e) => e.stopPropagation()}>
          <button
            className="btn close-modal"
            onClick={() => setShowModal(false)}
          >
            <FaTimes />
          </button>
          <h5>Are you sure to delete this?</h5>
          <div className="delete-btn-container">
            <button
              className="btn delete-btn"
              onClick={(e) => {
                dispatch(deleteProduct(id));
                setShowModal(false);
              }}
            >
              yes
            </button>
            <button className="btn " onClick={(e) => setShowModal(false)}>
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
