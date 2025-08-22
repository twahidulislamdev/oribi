import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./components/features/counterSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
