import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [], total: 0, amount: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const isExist = state.cart.find((item) => item.id === action.payload.id);
      if (isExist) {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              qty: Number(item.qty) + Number(action.payload.qty),
            };
          }
          return item;
        });
      } else {
        console.log(action.payload);
        state.cart.push(action.payload);
      }
    },
    getTotal: (state, action) => {
      const { totalPrice, amount } = state.cart.reduce(
        (total, item) => {
          let price = item.qty * item.price;
          total.amount += Number(item.qty);
          total.totalPrice += price;
          return total;
        },
        { totalPrice: 0, amount: 0 }
      );
      state.total = totalPrice;
      state.amount = amount;
    },
    deleteCart(state, action) {
      console.log(action.payload);
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      state.cart = newCart;
    },
  },
});

export const { addCart, getTotal, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
