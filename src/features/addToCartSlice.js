import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: { value: [] },

  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addItem } = addToCartSlice.actions;

export default addToCartSlice.reducer;
