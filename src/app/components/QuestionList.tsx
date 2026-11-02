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
        <Grid size={{ xs: 12, sm: 2 }}>  
           </Grid>
        <Grid size={{ xs: 12, sm: 8 }}>
          <Box
            sx={{
              border: "2px solid #A8BBA3",
              height: "25rem",
              overflowY: "auto",
              marginTop: "10px",
            }}
          >
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
                      borderRadius:"16px",
                      margin: "10px",
                      fontSize: { xs: "20px", sm: "30px" },

                    }}
                    key={id}
                  >
                    <Stack direction="row" spacing={2}>
                      <Box sx={{padding: "0px 10px",backgroundColor: "#ededed", color: "#52a9ff",borderRadius:"10px"}}>{id}</Box>

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
