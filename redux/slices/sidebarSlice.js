import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
    specific: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggle, specific } = sidebarSlice.actions;

export default sidebarSlice.reducer;
