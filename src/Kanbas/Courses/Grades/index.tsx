
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaFileExport, FaCog, FaSearch, FaFilter } from 'react-icons/fa';
import "./index.css";

function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <h1>Grades</h1>
            <div className="row">
                <span style={{ justifyContent: "right", display: "flex" }}>
                    <button type="button" className="btn btn-secondary" style={{ marginLeft: "5px" }}>
                        <FaFileImport style={{ marginRight: "5px" }} />Import
                    </button>
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" style={{ marginLeft: "5px" }}>
                        <FaFileExport /> Export
                    </button>
                    <button type="button" className="btn btn-secondary" style={{ marginLeft: "5px" }}>
                        <FaCog />
                    </button>
                </span>
            </div>
            <div className="row">
                <div className="col-6">
                    <label style={{ fontWeight: "bold" }}>Student Name</label>
                </div>
                <div className="col-6">
                    <label style={{ fontWeight: "bold" }}>Assignment Name</label>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" style={{ height: "100%" }}>
                                <FaSearch />
                            </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Search Student" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" style={{ height: "100%" }}></button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Option 1</a>
                                <a className="dropdown-item" href="#">Option 2</a>
                                <a className="dropdown-item" href="#">Option 3</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" style={{ height: "100%" }}>
                                <FaSearch />
                            </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Search Assignment" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" style={{ height: "100%" }}></button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Option 1</a>
                                <a className="dropdown-item" href="#">Option 2</a>
                                <a className="dropdown-item" href="#">Option 3</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-secondary" style={{ marginTop: "10px" }}>
                <FaFilter /> Apply Filter
            </button>
            <div className="table-responsive">
                <table className="table table-striped table-bordered" style={{ marginTop: "25px" }}>
                    <thead>
                        <th>Student Name</th>
                        {as.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {es.map((enrollment) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return (
                                <tr key={enrollment.user}>
                                    <td className="wd-grade-user-col">{user?.firstName} {user?.lastName}</td>
                                    {as.map((assignment) => {
                                        const grade = grades.find((grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return grade ? <td key={assignment._id} className="wd-grade-col">{grade.grade}</td> : null;
                                    })}
                                </tr>
                            );
                        })}
                    </tbody></table>
            </div></div>
    );
}
export default Grades;

