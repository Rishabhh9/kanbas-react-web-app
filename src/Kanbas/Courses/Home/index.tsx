import ModuleList from "../Modules/List";
import "./index.css";
import { FaRegCalendarAlt } from 'react-icons/fa';


function Home() {
    return (
        <div className="row">
            <div className="col - 8">
                <ModuleList />
            </div>
            <div className="col-4">
                <div className="flex-grow-0 me-2 d-none d-lg-block">
                    <h2>Status</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <button>Unpublish</button>
                                </td>
                                <td>
                                    <button>Publish</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <br />

                    <button className="btn-block wd-course-status-buttons">Import Existing Content</button><br />
                    <button className="btn-block wd-course-status-buttons">Import From Commons</button><br />
                    <button className="btn-block wd-course-status-buttons">Choose Home Page</button><br />
                    <br />
                    <p className="wd-course-status-todo-tag">To Do</p>
                    <hr />
                    <ul>
                        <div style={{ fontSize: "small" }}>
                            <li><a href="#" style={{ color: "red" }}>Grade A1 = ENV + HTML</a></li>
                            100 points . SEPT 18 11:59pm
                        </div>
                    </ul>
                    <br />
                    <div style={{ display: "flex", marginBottom: "-30px" }}>
                        <p style={{ fontWeight: "bold" }}>Coming Up</p>
                        <a href="#" style={{ paddingLeft: "30px", fontSize: "small" }}>
                            <FaRegCalendarAlt className="fs-2" size={16} />
                            <span style={{ color: "red", paddingLeft: "10px" }}>View Calendar</span>
                        </a>
                    </div>
                    <hr />
                    <ul>
                        <li style={{ fontSize: "small" }}>
                            <a href="#" style={{ paddingLeft: "30px" }}>
                                <FaRegCalendarAlt style={{ color: "red" }} size={16} /><span style={{ color: "red", paddingLeft: "10px" }}>Lecture</span>
                            </a>
                            <br />
                            CS 5610
                            <br />
                            Sept 18 11:30 am
                            <br />
                        </li>
                        <li style={{ fontSize: "small" }}>
                            <a href="#" style={{ paddingLeft: "30px" }}>
                                <FaRegCalendarAlt style={{ color: "red" }} size={16} /><span style={{ color: "red", paddingLeft: "10px" }}>Lecture</span>
                            </a>
                            <br />
                            CS 5610
                            <br />
                            Sept 18 11:30 am
                            <br />
                        </li>
                        <li style={{ fontSize: "small" }}>
                            <a href="#" style={{ paddingLeft: "30px" }}>
                                <FaRegCalendarAlt style={{ color: "red" }} size={16} /><span style={{ color: "red", paddingLeft: "10px" }}>Lecture</span>
                            </a>
                            <br />
                            CS 5610
                            <br />
                            Sept 18 11:30 am
                            <br />
                        </li>
                    </ul>

                </div>

            </div>
        </div>
    );
}
export default Home;