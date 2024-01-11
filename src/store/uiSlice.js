import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    setLoading: (state) => true,
    clearLoading: (state) => false,
  },
});

export const { setLoading, clearLoading } = uiSlice.actions;
export default uiSlice.reducer;
