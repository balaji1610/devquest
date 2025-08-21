"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IcategoryType } from "@/app/interface/interface";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { GoStarFill } from "react-icons/go";
export default function RandomQuestion() {
  const { currentQuestions } = useSelector(
    (state: { Category: IcategoryType }) => state.Category
  );

  const [pickQuestion, setPickQuestion] = useState({
    id: "",
    question: "",
    isImportant: false,
  });
  useEffect(() => {
    pickQuestion;
  }, [pickQuestion]);

  const handleOnPickRandomQuestion = () => {
    const PickRandomNumber = Math.floor(
      Math.random() * currentQuestions.length
    );

    const getRandomQuestion = currentQuestions.filter((el) => {
      return el.id == String(PickRandomNumber);
    });

    setPickQuestion(getRandomQuestion[0]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Stack spacing={2}>
        {pickQuestion.id ? (
          <Box
            sx={{
              width: { xs: "20rem", sm: "50rem" },
              padding: { xs: "1px", sm: "10px" },

              border: "1px solid #E9E9E9",
              backgroundColor: "#ffffff",
              borderLeft: "3px solid #03A9F4",
              margin: "10px",
              boxShadow: "1px 1px #03a9f473",
              fontSize: { xs: "20px", sm: "30px" },
            }}
          >
            <Stack direction="row" spacing={2}>
              <Box>{pickQuestion.id}</Box>

              <Box>{pickQuestion.question}</Box>
              <Box>
                {pickQuestion.isImportant ? (
                  <>
                    <GoStarFill color="#FFEB3B" />
                  </>
                ) : (
                  ""
                )}
              </Box>
            </Stack>
          </Box>
        ) : (
          <Box>Please Pick It</Box>
        )}

        <Box>
          {" "}
          <Button
            variant="contained"
            color="success"
            onClick={handleOnPickRandomQuestion}
          >
            Random Question
          </Button>
        </Box>
      </Stack>
    </div>
  );
}
