import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Apidetails from "../api/Apidetails";
import "./Courselist.css";

const Courselist = () => {
  const [courses, setCourses] = useState(null);
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Apidetails();
        console.log("Data", response.data);

        if (response.data && response.data.length > 0) {
          setCourses(response.data);

          const studentsDataArray = response.data.map((course) => ({
            courseId: course.id,
            students: course.students,
          }));

          setStudentsData(studentsDataArray);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="page-container">
      <h1 className="course-list-header">Course List</h1>
      <ul className="course-list">
        {courses &&
          courses.map((course) => (
            <li key={course.id} className="course-list-item">
              <Link
                to={`/Coursedetails/${course.id}`}
                className="course-list-item-link"
              >
                <div>
                  <strong className="course-name">{course.name}</strong>
                  <p className="course-description">{course.description}</p>
                </div>
              </Link>
            </li>
          ))}
      </ul>

      <h1 className="student-list-header">Student List</h1>
      <ul className="student-list">
        {studentsData.map((data) =>
          data.students.map((student) => (
            <li key={student.id} className="student-list-item">
              <Link
                to={`/Student/${student.id}`}
                className="student-list-item-link"
              >
                <div>
                  <strong className="student-name">
                    {student.id}, {student.name}
                  </strong>
                  <p className="student-info">Email: {student.email}</p>
                  <p className="student-info">Course ID: {data.courseId}</p>
                </div>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Courselist;
