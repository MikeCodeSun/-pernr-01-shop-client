import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../api/axios";

const initialState = { products: null, loading: false };

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const res = await axiosApi.get("product");

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product) => {
    try {
      const res = await axiosApi.post("product", product);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    try {
      const res = await axiosApi.delete(`product/${id}`);
      return { id, res };
    } catch (error) {
      return error.response.data;
    }
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async (product) => {
    try {
      const res = await axiosApi.patch(`product/${product.id}`, product);
      // console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
  }
);

const productsSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.loading = false;
    });
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products.push(action.payload.product);
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    });
    builder.addCase(editProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.products = state.products.map((item) => {
        if (item.id === action.payload.product.id) {
          return { ...item, ...action.payload.product };
        }
        return item;
      });
    });
  },
});

export default productsSlice.reducer;
