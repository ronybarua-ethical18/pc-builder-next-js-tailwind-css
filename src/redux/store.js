import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import productSlice from "./productSlice";

export default configureStore({
  reducer: { 
    product:productSlice,
    [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
