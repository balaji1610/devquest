"use client";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { IapplicationType } from "@/app/interface/interface";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const getCategoryData = useSelector(
    (state: { ApplicationData: IapplicationType[] }) => state.ApplicationData
  );
  interface ImageMap {
    ui001: string;
    ui002: string;
    ui003: string;
    ui004: string;
    ui005: string;
    b001: string;
    b002: string;
    db001: string;
  }
  const getImageId: ImageMap = {
    ui001: "/html.png",
    ui002: "/css.png",
    ui003: "/js.png",
    ui004: "/react.png",
    ui005: "/redux.png",
    b001: "/node-js.png",
    b002: "/java.png",
    db001: "/mysql.png",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <h1>Hello</h1>
      {getCategoryData.map((el) => {
        const { category, categoryId, name, questions } = el;
        return (
          <Card
            key={categoryId}
            sx={{
              width: "10rem",
              border: "1px solid #9CAFAA",
              padding: "20px",
              margin: "20px",
              cursor: "pointer",
              ":hover": {
                boxShadow: 8,
                transform: "translateY(-5px)",
                transition: "all 0.3s ease-in-out",
                border: "1px solid #000000",
              },
            }}
            onClick={() => router.push(`${name}/${categoryId}`)}
          >
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Box>
                  <Image
                    src={getImageId[categoryId as keyof ImageMap]}
                    alt="HTML Logo"
                    loading="lazy"
                    width={35}
                    height={48}
                  />
                </Box>
                <Box>
                  <Typography variant="h6">{name}</Typography>
                </Box>
              </Stack>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                {" "}
                <Typography
                  variant="caption"
                  gutterBottom
                  sx={{ display: "block" }}
                >
                  Q - {questions.length}
                </Typography>
              </Box>
              <Stack direction="row" spacing={2}>
                <Box>{category}</Box>
              </Stack>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
