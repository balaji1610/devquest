import HTML from "@/app/utills/frontend/HTML.json";
import CSS from "@/app/utills/frontend/CSS.json";
import Javascript from "@/app/utills/frontend/Javascript.json";
import React from "@/app/utills/frontend/React.json";
import Redux from "@/app/utills/frontend/Redux.json";

import NodeJs from "@/app/utills/backend/NodeJs.json";

import Mysql from "@/app/utills/database/mysql.json";

const ApplicationData = [
  {
    category: "Front-End",
    categoryId: "UI001",
    name: "HTML",
    questions: HTML,
  },
  {
    category: "Front-End",
    categoryId: "UI002",
    name: "CSS",
    questions: CSS,
  },
  {
    category: "Front-End",
    categoryId: "UI003",
    name: "Javascript",
    questions: Javascript,
  },
  {
    category: "Front-End",
    categoryId: "UI004",
    name: "React",
    questions: React,
  },
  {
    category: "Front-End",
    categoryId: "UI005",
    name: "Redux",
    questions: Redux,
  },
  {
    category: "Back-End",
    categoryId: "B001",
    name: "NodeJs",
    questions: NodeJs,
  },
  {
    category: "Database",
    categoryId: "DB001",
    name: "Mysql",
    questions: Mysql,
  },
];

export default ApplicationData;
