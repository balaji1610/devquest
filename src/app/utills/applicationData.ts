import HTML from "@/app/utills/frontend/HTML.json";
import CSS from "@/app/utills/frontend/CSS.json";
import Javascript from "@/app/utills/frontend/Javascript.json";
import React from "@/app/utills/frontend/React.json";
import Redux from "@/app/utills/frontend/Redux.json";

import NodeJs from "@/app/utills/backend/NodeJs.json";
import Java from "@/app/utills/backend/Java.json";
import Mysql from "@/app/utills/database/mysql.json";

const ApplicationData = [
  {
    category: "Front-End",
    categoryId: "ui001",
    name: "HTML",
    questions: HTML,
  },
  {
    category: "Front-End",
    categoryId: "ui002",
    name: "CSS",
    questions: CSS,
  },
  {
    category: "Front-End",
    categoryId: "ui003",
    name: "Javascript",
    questions: Javascript,
  },
  {
    category: "Front-End",
    categoryId: "ui004",
    name: "React",
    questions: React,
  },
  {
    category: "Front-End",
    categoryId: "ui005",
    name: "Redux",
    questions: Redux,
  },
  {
    category: "Back-End",
    categoryId: "b001",
    name: "NodeJS",
    questions: NodeJs,
  },
  {
    category: "Back-End",
    categoryId: "b002",
    name: "Java",
    questions: Java,
  },
  {
    category: "Database",
    categoryId: "db001",
    name: "Mysql",
    questions: Mysql,
  },
];

export default ApplicationData;
