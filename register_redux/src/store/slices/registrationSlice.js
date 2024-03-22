import { createSlice } from "@reduxjs/toolkit";

const registrationSlice = createSlice({
  name: "registration",
  initialState: {},
  reducers: {
    addUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { addUserInfo } = registrationSlice.actions;
export default registrationSlice.reducer;
