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
    changeLanguage: (state, action) => {
      if (action.payload === "es") {
        state.language = "en";
      } else if (action.payload === "en") {
        state.language = "es";
      }
    },
  },
});

export const { setInfo, changeLanguage } = infoSlice.actions;

export default infoSlice.reducer;
