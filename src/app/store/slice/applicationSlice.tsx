"use client";
import ApplicationData from "@/app/utills/applicationData";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ApplicationData: ApplicationData,
};

const ApplicationSlice = createSlice({
  name: "ApplicationSlice",
  initialState,
  reducers: {
    add: (state, action) => {},
  },
});
export const { add } = ApplicationSlice.actions;
export default ApplicationSlice.reducer;
