import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../api/axios";

const initialState = { product: null, loading: false, reviews: [] };

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axiosApi.get(`product/${id}`);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createReview = createAsyncThunk(
  "product/review/createReview",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosApi.post(`product/${data.id}/review`, {
        content: data.content,
        rating: data.rating,
      });
      // console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload.product;
      state.reviews = action.payload.reviews;
      state.loading = false;
    });
    builder.addCase(getProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createReview.fulfilled, (state, action) => {
      state.reviews.push(action.payload.review);
    });
  },
});

export default productSlice.reducer;
