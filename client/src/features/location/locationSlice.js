import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    value: {
      location: "",
      lat: 0,
      lon: 0,
    },
  },
  reducers: {
    changeLocation: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeLocation } = locationSlice.actions;

export const selectLocationData = (state) => state.location.value;

export default locationSlice.reducer;
