import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "es",
  info: null,
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.info = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setInfo, setLanguage } = infoSlice.actions;

export default infoSlice.reducer;
