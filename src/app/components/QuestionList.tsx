"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { useSelector } from "react-redux";
import { IcategoryType, IquestionsType } from "@/app/interface/interface";

export default function QuestionList() {
  const { currentQuestions } = useSelector(
    (state: { Category: IcategoryType }) => state.Category
  );
  console.log(currentQuestions);
  return (
    <div>
      {currentQuestions.length > 0 &&
        currentQuestions.flatMap((el) => {
          const { id, question } = el;
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
