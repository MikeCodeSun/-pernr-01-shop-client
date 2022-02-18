import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import productsReducer from "./features/productsSlice";
import productReducer from "./features/productSlice";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
