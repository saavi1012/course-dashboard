// CourseCard.js
import React from "react";
import ProgressBar from "./ProgressBar"; // We'll create this next

const CourseCard = ({ course, onCourseComplete }) => {
  // A function to handle when a user marks a course as complete
  const markComplete = (courseId) => {
    // Implement logic to mark course as complete, possibly sending a PATCH request to your API
    // Then update state accordingly
    onCourseComplete((prevCourses) =>
      prevCourses.map((c) =>
        c.id === courseId ? { ...c, completed: !c.completed } : c
      )
    );
  };

  return (
    <div className="course-card">
      <img
        src={course.thumbnail}
        alt={course.name}
        className="course-thumbnail"
      />
      <div className="course-info">
        <h2>{course.name}</h2>
        <p>Instructor: {course.instructor}</p>
        <p>Due by: {course.dueDate}</p>
        <ProgressBar progress={course.progress} />
        <button onClick={() => markComplete(course.id)}>
          {course.completed ? "Mark as Incomplete" : "Mark as Complete"}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
