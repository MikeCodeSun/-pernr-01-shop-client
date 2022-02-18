import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SingleProduct from "./pages/SingleProduct";
import User from "./pages/User";
import Cart from "./pages/Cart";
import AuthRoute from "./util/AuthRoute";
import PrivateRoute from "./util/PrivateRoute";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route
            exact
            path="/login"
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />
          <Route
            exact
            path="/register"
            element={
              <AuthRoute>
                <Register />
              </AuthRoute>
            }
          />
          <Route
            exact
            path="/user/:id"
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />

          <Route exact path="/product/:id" element={<SingleProduct />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
