"use client";
import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { IapplicationType } from "@/app/interface/interface";
export default function QuestionList(props: { categoryId: string }) {
  const { categoryId } = props;
  const state = useSelector(
    (state: { ApplicationData: IapplicationType[] }) => state.ApplicationData
  );

  const getQuestions = state
    .filter((el) => el.categoryId == categoryId)
    .map((el) => {
      return el.questions;
    });

  return (
    <div>
      {getQuestions[0].map((el) => {
        const { id, question, isImportant } = el;
        return (
          <Box
            sx={{
              width: "50rem",
              padding: "10px",
              border: "1px solid #E9E9E9",
              backgroundColor: "#E9E9E9",
              borderLeft: "3px solid #000000",
              margin: "30px",
            }}
            key={id}
          >
            <Stack direction="row" spacing={2}>
              <Box>{id}</Box>
              <Box>{question}</Box>
            </Stack>
          </Box>
        );
      })}
    </div>
  );
}
