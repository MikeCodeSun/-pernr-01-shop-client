import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser({ email, password })).then((res) => {
      if (res.type === "user/loginUser/rejected") {
        console.log(res.payload.stack);
        setError(res.payload.stack);
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

  // console.log(Object.keys(error).length);

  return (
    <>
      <form>
        <div className="title">
          <h3>Log in</h3>
          <div className="title-underline"></div>
        </div>

        {alert && Object.keys(error).length > 0 && (
          <div className="form-control">
            {Object.values(error).map((err, index) => {
              return (
                <div className="alert alert-danger" key={index}>
                  {err}
                </div>
              );
            })}
          </div>
        )}

        <div className="form-control">
          <label htmlFor="emai" className="form-label">
            Email:
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
