"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import { useEffect, useState } from "react";
import QuestionList from "@/app/components/QuestionList";
import RandomQuestion from "@/app/components/RandomQuestion";
import { getCategory } from "@/app/store/slice/applicationSlice";
import { useDispatch } from "react-redux";

export default function QuestionSelection(props: {
  category: string;
  categoryId: string;
}) {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory(props));
  }, [dispatch, props]);

  const handleOnTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "auto",
        }}
      >
        <div style={{ width: "20rem" }}>
          {" "}
          <AppBar position="static">
            <Tabs
              textColor="inherit"
              variant="standard"
              value={tabIndex}
              onChange={handleOnTabChange}
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#EBEAFF",
                },
              }}
            >
              <Tab label="Random Question" />
              <Tab label="All Question" />
            </Tabs>
          </AppBar>
        </div>
      </div>

      {tabIndex == 0 ? <RandomQuestion /> : <QuestionList />}
    </div>
  );
}
