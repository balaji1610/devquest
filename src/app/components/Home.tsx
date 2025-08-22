"use client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { IapplicationType } from "@/app/interface/interface";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const getCategoryData = useSelector(
    (state: { ApplicationData: IapplicationType[] }) => state.ApplicationData
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {getCategoryData.map((el) => {
        const { categoryId, name, questions } = el;
        return (
          <Card
            key={categoryId}
            sx={{
              width: "10rem",
              border: "1px solid #9CAFAA",
              padding: "20px",
              margin: "20px",
              cursor: "pointer",
            }}
          >
            {" "}
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Box>ICON@2</Box>
                <Box>
                  {" "}
                  <Typography sx={{ color: "success", fontSize: 14 }}>
                    {name}
                  </Typography>
                </Box>
              </Stack>
              <h1>Q-{questions.length}</h1>
            </CardContent>
            <CardActions>
              <button onClick={() => router.push(`${name}/${categoryId}`)}>
                View
              </button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
