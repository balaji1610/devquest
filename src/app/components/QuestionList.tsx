"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { useSelector } from "react-redux";
import { IcategoryType } from "@/app/interface/interface";
import Grid from "@mui/material/Grid";
import { GoStarFill } from "react-icons/go";

export default function QuestionList() {
  const { currentQuestions } = useSelector(
    (state: { Category: IcategoryType }) => state.Category
  );

  return (
    <div>
      <Grid
        container
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          wrap: "wrap",
        }}
        spacing={2}
      >
        <Grid size={{ xs: 12, sm: 2 }}></Grid>
        <Grid size={{ xs: 12, sm: 8 }}>
          <Box>
            {" "}
            {currentQuestions.length > 0 &&
              currentQuestions.flatMap((el) => {
                const { id, question, isImportant } = el;
                return (
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
                    key={id}
                  >
                    <Stack direction="row" spacing={2}>
                      <Box>{id}</Box>

                      <Box>{question}</Box>
                      <Box>
                        {isImportant ? (
                          <>
                            <GoStarFill color="#FFEB3B" />
                          </>
                        ) : (
                          ""
                        )}
                      </Box>
                    </Stack>
                  </Box>
                );
              })}
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 2 }}></Grid>
      </Grid>
    </div>
  );
}
