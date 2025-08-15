"use client";
import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "@/app/store/slice/applicationSlice";

export const store = configureStore({
  reducer: applicationSlice,
});
