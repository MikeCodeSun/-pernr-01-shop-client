import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password })).then((err) => {
      if (err.type === "user/registerUser/rejected") {
        setError(err.payload.stack);
        setAlert(true);
      } else {
        navigate("/");
      }
    });
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeOut);
  }, [error]);

  return (
    <>
      <form>
        <div className="title">
          <h3>Register</h3>
          <div className="title-underline"></div>
        </div>
        {alert &&
          Object.values(error).map((err, index) => {
            return (
              <div className="alert alert-danger" key={index}>
                {err}
              </div>
            );
          })}
        <div className="form-control">
          <label htmlFor="name" className="form-label">
            Name:{" "}
          </label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="emai" className="form-label">
            Email:{" "}
          </label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password" className="form-label">
            Passwoed
          </label>
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-control">
          <button className="btn btn-hipster btn-block" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
