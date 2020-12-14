import { configureStore } from "@reduxjs/toolkit";

import locationReducer from "../features/location/locationSlice";

export default configureStore({
  reducer: {
    location: locationReducer,
  },
});
