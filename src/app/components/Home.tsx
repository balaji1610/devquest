"use client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { IapplicationType } from "@/app/interface/interface";

export default function Home() {
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
        const { categoryId, name } = el;
        return (
          <Card
            key={categoryId}
            sx={{
              width: "10rem",
              border: "1px solid red",
              padding: "20px",
              margin: "20px",
            }}
          >
            {" "}
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                {name}
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        );
      })}
    </div>
  );
}
