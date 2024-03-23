import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "./../../apis/config";

export const getProductsListThunk = createAsyncThunk(
  "products/getProducts", // Change this to "products/getProducts"
  async () => {
    const res = await axiosInstance.get("/products");
    console.log("res.data.products", res.data.products);
    return res.data.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [], // Initialize productsList as an empty array
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsListThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsListThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productsList = action.payload;
      })
      .addCase(getProductsListThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
