import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { FaGlasses } from "react-icons/fa";
import NavigationBreadcrumb from "./Breadcrum";
import Button from 'react-bootstrap/Button';

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <HiMiniBars3 style={{ "color": "red", paddingLeft: "30px", fontSize: "3.5em" }} /><NavigationBreadcrumb />
        <div style={{ marginLeft: 'auto', marginTop: "16px" }}>
          <Button className="wd-button-view"><FaGlasses style={{ paddingRight: "3px", paddingBottom: "3px" }} />Student View</Button>
        </div>
      </div>
      <hr style={{ width: '100%' }} />
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "100px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />

            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />

            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;