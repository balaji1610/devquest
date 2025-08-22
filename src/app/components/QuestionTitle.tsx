"use client";
import Typography from "@mui/material/Typography";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function QuestionTitle({ category }: { category: string }) {
  const router = useRouter();
  return (
    <div style={{ border: "1px solid #F1F0E4" }}>
      <div
        title="Back"
        style={{ cursor: "pointer" }}
        onClick={() => router.push("/")}
      >
        {" "}
        <IoArrowBackCircleOutline color="red" size={30} />
      </div>

      <Typography variant="h4" color={"#280A3E"} align="center">
        {`${category} - Interview Question`}
      </Typography>
    </div>
  );
}
