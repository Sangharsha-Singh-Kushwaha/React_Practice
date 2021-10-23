import {useState } from "react";
import { Container, Row ,Col} from "reactstrap";
import Course from "./Course";
function Allcourses() {
    const [courses, setCourses] = useState([
        { title: "xyz", description: "abc" },
        { title: "xyz", description: "abc" },
        { title: "xyz", description: "abc" },
        { title: "xyz", description: "abc" }
    ]);
    return (
      <div>
        <h1>All Courses</h1>
        <p>List of courses are as follows</p>
        {courses.length > 0
          ? courses.map((item) => <Course course={item} />)
          : "NO courses"}
      </div>
    );
}
export default Allcourses;