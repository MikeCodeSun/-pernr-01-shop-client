import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/userSlice";

export default function Navbar() {
  const { user, error } = useSelector((state) => state.user);
  const { amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // console.log(user);
  // console.log(error);
  // console.log(amount);
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);

  const toggleLinks = () => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    const linksContainerHeight =
      linksContainerRef.current.getBoundingClientRect().height;
    // console.log(linksHeight);
    if (linksContainerHeight === 0) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = 0;
    }
  };

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <h3 className="logo">shop</h3>
            </Link>
            <button className="btn nav-toggle" onClick={toggleLinks}>
              <FaAlignJustify />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            {user ? (
              <ul className="links" ref={linksRef}>
                <li className="link">
                  <Link to={`/user/${user.id}`}>{user.name}</Link>
                </li>
                <li className="link">
                  <Link to="/cart">
                    cart <span className="link-cart">({amount})</span>{" "}
                  </Link>
                </li>
                <li className="link">
                  <Link to="/" onClick={() => dispatch(logout())}>
                    Log out
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="links" ref={linksRef}>
                <li className="link">
                  <Link to="/login">Log in</Link>
                </li>
                <li className="link">
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
