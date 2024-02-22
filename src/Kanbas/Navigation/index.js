  import { Link, useLocation } from "react-router-dom";
  import "./index.css";
  import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaEnvelope, FaHistory, FaPalette, FaArrowRight, FaQuestionCircle } from "react-icons/fa";

  function KanbasNavigation() {
    const links = [
      { label: "Account", icon: <FaRegUserCircle className="fs-2" style={{ color: "white" }}/> },
      { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" style={{ color: "red" }} /> },
      { label: "Courses", icon: <FaBook className="fs-2" style={{ color: "red" }} /> },
      { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" style={{ color: "red" }} /> },
      { label: "Inbox", icon: <FaEnvelope className="fs-2" style={{ color: "red" }} /> },
      { label: "History", icon: <FaHistory className="fs-2" style={{ color: "red" }} /> },
      { label: "Studio", icon: <FaPalette className="fs-2" style={{ color: "red" }} /> },
      { label: "Commons", icon: <FaArrowRight className="fs-2" style={{ color: "red" }} /> },
      { label: "Help", icon: <FaQuestionCircle className="fs-2" style={{ color: "red" }} /> },
    ];
    const { pathname } = useLocation();
    return (
      <ul className="wd-kanbas-navigation">
        <li>
          <h4 className="N-logo">N</h4>
        </li>
        {links.map((link, index) => (
          <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
            <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
          </li>
        ))}
      </ul>
    );
  }
  export default KanbasNavigation;