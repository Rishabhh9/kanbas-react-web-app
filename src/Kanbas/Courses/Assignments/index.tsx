import React, { useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import { assignments } from "../../Database";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { deleteAssignments } from "./assignmentsReducer";

function Assignments() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { courseId } = useParams();
  //const assignmentList = assignments.filter((assignment) => assignment.course === courseId);
  const assignmentList = useSelector((state: KanbasState) => state.assignmentReducer.assignments.filter(
    (assignment) => assignment.course === courseId));
  const new_assignment_id = assignmentList[0]._id.substring(0, 3) + (parseInt(assignmentList[assignmentList.length - 1]._id.substring(2)) + 1)
  const assignment = useSelector((state: KanbasState) => state.assignmentReducer.assignment);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState("");

  const handleDelete = (assignmentId: string) => {
    setAssignmentToDelete(assignmentId);
    setShowConfirmation(true);
  };
  const handleConfirmDelete = () => {
    dispatch(deleteAssignments(assignmentToDelete));
    setShowConfirmation(false);
  };
  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <input
            type="text"
            id="AssignmentSearch"
            name="AssignmentSearch"
            className="form-control float-start"
            placeholder="Search for Assignment"
          />
        </div>
        <div className="col float-end" style={{ display: "flex", justifyContent: "right" }}>
          <button type="button" className="btn btn-secondary">+Group</button>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments/${new_assignment_id}`}>
            <button type="button" className="btn btn-danger">+Assignment</button>
          </Link>
          <button type="button" className="btn btn-secondary"><FaEllipsisV /></button>
        </div>
      </div>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">

                  <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
                    <Modal.Header closeButton>
                      <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete this assignment?</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseConfirmation}>No</Button>
                      <Button variant="danger" onClick={handleConfirmDelete}>Yes</Button>
                    </Modal.Footer>
                  </Modal>
                  <Button className="wd-assignment-delete" variant="danger" onClick={() => handleDelete(assignment._id)}>Delete</Button>
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
  );
}
export default Assignments;