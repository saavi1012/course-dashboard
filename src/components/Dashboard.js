// Dashboard.js
import React from "react";
import "./Dashboard.css";
import CourseList from "./CourseList";

const Dashboard = ({ userId }) => {
  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>
      <CourseList userId={userId} />
    </div>
  );
};

export default Dashboard;
