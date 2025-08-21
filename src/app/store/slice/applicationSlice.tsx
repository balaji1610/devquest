"use client";
import ApplicationData from "@/app/utills/applicationData";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IcategoryType,
  IquestionsType,
  IapplicationType,
} from "@/app/interface/interface";

const Category: IcategoryType = {
  currentcategory: "Javascript",
  currentcategoryId: "ui003",
  currentQuestions: [],
};
const initialState = {
  ApplicationData: ApplicationData,
  Category: Category,
};

const ApplicationSlice = createSlice({
  name: "ApplicationSlice",
  initialState,
  reducers: {
    getCategory: (
      state,
      action: PayloadAction<{ category: string; categoryId: string }>
    ) => {
      const { category, categoryId } = action.payload;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const getCurrentQuestion: any[] = state.ApplicationData?.filter(
        (el) => el.categoryId === categoryId
      )
        .map((el) => el.questions)
        .flat();

      state.Category = {
        ...state.Category,
        currentcategory: category,
        currentcategoryId: categoryId,
        currentQuestions: getCurrentQuestion,
      };
    },
  },
});
export const { getCategory } = ApplicationSlice.actions;
export default ApplicationSlice.reducer;
