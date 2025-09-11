import { configureStore } from "@reduxjs/toolkit";
import addToCart from "/src/features/addToCartSlice"; 

export const store = configureStore({
  reducer: {
    cart: addToCart,
  },
});
