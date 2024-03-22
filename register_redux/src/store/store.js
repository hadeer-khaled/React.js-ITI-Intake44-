import { configureStore } from "@reduxjs/toolkit";
import registrationSlice from "./slices/registrationSlice";

export default configureStore({
  reducer: {
    registrationReducer: registrationSlice,
  },
});
