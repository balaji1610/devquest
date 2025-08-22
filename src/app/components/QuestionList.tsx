"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { GoStarFill } from "react-icons/go";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import { useSelector } from "react-redux";
import { useMediaQuery, useTheme } from "@mui/material";

import { IcategoryType } from "@/app/interface/interface";


export default function QuestionList() {
  const { currentQuestions } = useSelector(
    (state: { Category: IcategoryType }) => state.Category
  );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const listWidth = isMobile ? 350 : 800; 

  const Row = ({ index, style }: ListChildComponentProps) => {
    const item = currentQuestions[index];
    if (!item) return null;

    const { id, question, isImportant } = item;

    return (
      <Box style={style} sx={{ px: 2, py: 1 }}>
        {" "}
        <Box
          sx={{
            width: { xs: "20rem", sm: "50rem" },
            padding: { xs: "10px", sm: "10px" },
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
            <Box>{isImportant && <GoStarFill color="#FFEB3B" />}</Box>
          </Stack>
        </Box>
      </Box>
    );
  };

  return (
    <Grid
      container
      direction="row"
      sx={{ justifyContent: "center", alignItems: "center", wrap: "wrap" }}
      spacing={2}
    >
      <Grid size={{ xs: 12, sm: 2 }}></Grid>
      <Grid size={{ xs: 12, sm: 8 }}>
        <Box>
          <List
            height={600} // adjust viewport height
            itemCount={currentQuestions.length} // number of items
            itemSize={80} // row height in px
            width={listWidth} // list width
          >
            {Row}
          </List>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, sm: 2 }}></Grid>
    </Grid>
  );
}
