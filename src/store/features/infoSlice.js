import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { setInfo } = infoSlice.actions;

export default infoSlice.reducer;
