"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { useSelector } from "react-redux";
import { IcategoryType, IquestionsType } from "@/app/interface/interface";
import Grid from "@mui/material/Grid";
import { GoStarFill } from "react-icons/go";
import Button from '@mui/material/Button';
import { useState } from "react";
import { BsCopy } from "react-icons/bs";
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';

export default function QuestionList() {
  const { currentQuestions } = useSelector(
    (state: { Category: IcategoryType }) => state.Category
  );

  const label = { slotProps: { input: { 'aria-label': 'Switch demo' } } };
  const [isimportantQuestion, setIsimportantQuestion] = useState(currentQuestions)
  const [value, setValue] = useState<number[]>([1, isimportantQuestion.length]);
  const [isRanger, setIsRanger] = useState<boolean>(false);
  const [rangerQuestions, setRangerQuestions] = useState<IquestionsType[]>([])

  const handleChange = (event: Event, newValue: number[]) => {

    if (newValue.length) {
      setIsRanger(true)
    }
    setValue(newValue);
    const isGetQuestion: IquestionsType[] = isimportantQuestion.slice(newValue[0], newValue[1])
    setRangerQuestions(isGetQuestion)

  };
  const handleOnImportantQonly = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setIsimportantQuestion((prev) => {
        return prev.filter((el) => {
          return el.isImportant === event.target.checked
        })
      })
    } else {
      setIsimportantQuestion(currentQuestions)
    }
  }
  const handleCopy = async () => {
    try {
      const copyQuestion = isRanger
        ? rangerQuestions.map((el) => `${el.id}. ${el.question}`).join("\n")
        : isimportantQuestion.map((el) => `${el.id}. ${el.question}`).join("\n");

      await navigator.clipboard.writeText(copyQuestion);

      alert("Copied Successfully!");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Unable to copy text");
    }
  };
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
          <Box> <Switch  {...label} onChange={handleOnImportantQonly} /> Q-Only &nbsp;&nbsp;<Button variant="outlined" onClick={handleCopy} startIcon={<BsCopy />}>
            Copy
          </Button>  <Slider
              getAriaLabel={() => 'Temperature range'}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              max={isimportantQuestion.length}
              min={1}
            /></Box>


        </Grid>
        <Grid size={{ xs: 12, sm: 2 }}></Grid>
      </Grid>

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
            {
              (isRanger ? rangerQuestions : isimportantQuestion).flatMap((el) => {
                const { id, question, isImportant } = el;
                return (
                  <Box
                    sx={{
                      width: { xs: "20rem", sm: "50rem" },
                      padding: { xs: "1px", sm: "10px" },
                      border: "1px solid #E9E9E9",
                      backgroundColor: "#ffffff",
                      borderRadius: "16px",
                      margin: "10px",
                      fontSize: { xs: "20px", sm: "30px" },

                    }}
                    key={id}
                  >
                    <Stack direction="row" spacing={2}>
                      <Box sx={{ padding: "0px 10px", backgroundColor: "#ededed", color: "#52a9ff", borderRadius: "10px" }}>{id}</Box>

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
