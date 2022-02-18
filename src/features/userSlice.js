import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import axiosApi from "../api/axios";

const initialState = { user: null, error: null, products: [] };

// check & get localstorage token
if (localStorage.getItem("token")) {
  const token = jwtDecode(localStorage.getItem("token"));
  if (token.exp * 1000 > Date.now()) {
    initialState.user = token;
  } else {
    console.log("token exp");
  }
}

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, { rejectWithValue }) => {
    try {
      const res = await axiosApi.post("user/login", user);
      // console.log(res);
      return res.data;
    } catch (error) {
      // console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, { rejectWithValue }) => {
    try {
      const res = await axiosApi.post("user/register", user);
      return res.data;
    } catch (error) {
      // console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

// export const getUserProducts = createAsyncThunk("user/products", async () => {
//   try {
//     const res = await axiosApi.get("user/product");
//     // console.log(res);
//     return res.data;
//   } catch (error) {
//     // console.log(error);
//     return error;
//   }
// });

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // login(state, action) {
    //   localStorage.setItem("token", action.payload.token);
    //   state.user = action.payload;
    // },
    logout(state, action) {
      localStorage.removeItem("token");
      state.user = null;
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.user = action.payload.user;
      // state.error = action.payload.stack;
    });
    // builder.addCase(loginUser.rejected, (state, action) => {
    //   state.error = action.payload.stack;
    // });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.user = action.payload.user;
      // state.error = action.payload.stack;
    });

    // builder.addCase(getUserProducts.fulfilled, (state, action) => {
    //   state.products = action.payload.products;
    // });
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
