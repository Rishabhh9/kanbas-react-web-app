import React, { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaEllipsisV } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../../store";
import { addAssignments, deleteAssignments, updateAssignments, setAssignments, } from "../assignmentsReducer";
function AssignmentEditor() {
  const { assignmentId } = useParams();


  // const assignment = assignments.find(
  //   (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignmentList = useSelector((state: KanbasState) =>
    state.assignmentReducer.assignments);
  const assignment = useSelector((state: KanbasState) =>
    state.assignmentReducer.assignment);
  const check_exisiting_assignment = assignmentList.find((assignment) => assignment._id === assignmentId)
  useEffect(() => {
    if (check_exisiting_assignment !== undefined) {
      dispatch(setAssignments(check_exisiting_assignment))
    } else {
      dispatch(setAssignments([]))
    }
  }, [])
  const handleSave = () => {
    if (check_exisiting_assignment !== undefined) {
      dispatch(updateAssignments(assignment))
    } else {
      dispatch(addAssignments({ ...assignment, course: courseId, _id: assignmentId }))
    };
    navigate(`/Kanbas/Courses/${courseId}/Assignments`)
  };
  return (
    <>
      <div className="row">
        <div style={{ paddingLeft: '1000px' }}>
          <span style={{ color: 'green' }}>
            Published <i className="fas fa-check-circle"></i>
          </span>
          <button type="button" className="btn btn-secondary">
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <hr />

      {/* <div style={{ width: "100%" }}>
        <h2>Assignment Name</h2>
        <input value={assignment?.title}
          className="form-control mb-2" />
        <button onClick={handleSave} className="btn btn-success ms-2 float-end">
          Save
        </button>
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-danger float-end">
          Cancel
        </Link>
      </div> */}
      <div className="row">
        <div className="col-md-10">
          <div className="form-group" style={{ paddingTop: '10px' }}>
            <label htmlFor="assignmentName">Assignment Name</label>
            <input type="text" className="form-control" id="assignmentName" name="assignmentName" value={assignment?.title} onChange={(e) => dispatch(setAssignments({ ...assignment, title: e.target.value }))}
              style={{ marginTop: '12px' }} />
          </div>
          <div className="form-group">
            <textarea className="form-control" id="assignmentDesc" name="assignmentDesc" style={{ marginTop: '12px' }} value={assignment?.description}
              onChange={(e) => dispatch(setAssignments({ ...assignment, description: e.target.value }))}></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="form-group" style={{ float: 'right', marginTop: '12px' }}>
              <label htmlFor="marks">Points</label>
            </div>
          </div>
          <div className="col-md-7">
            <div className="form-group" style={{ marginTop: '12px' }}>
              <input type="number" className="form-control" id="marks" name="marks" value={assignment?.points}
                onChange={(e) => dispatch(setAssignments({ ...assignment, points: e.target.value }))} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="form-group" style={{ float: 'right', marginTop: '12px' }}>
              <label htmlFor="assignmentGroup">Assignment Group</label>
            </div>
          </div>
          <div className="col-md-7">
            <div className="form-group" style={{ marginTop: '12px' }}>
              <select className="form-control" id="assignmentGroup" name="assignmentGroup">
                <option value="assignment">Assignments</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="form-group" style={{ float: 'right', marginTop: '12px' }}>
              <label htmlFor="gradeDisplay">Display Grade as</label>
            </div>
          </div>
          <div className="col-md-7">
            <div className="form-group" style={{ marginTop: '12px' }}>
              <select className="form-control" id="gradeDisplay" name="gradeDisplay">
                <option value="percentage">Percentage</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-7" style={{ paddingLeft: '32px' }}>
            <div className="form-group" style={{ marginTop: '12px' }}>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                Do not count this towards final grade
              </label>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '12px' }}>
          <div className="col-md-3">
            <div className="form-group" style={{ float: 'right' }}>
              <label>Assign</label>
            </div>
          </div>
          <div className="col-md-7">
            <div className="form-group" style={{ border: '1px solid gray', padding: '5px' }}>
              <p style={{ fontSize: '20px', fontWeight: 'bold' }}> Assign To </p>
              <input type="text" className="form-control" />
              <p style={{ fontSize: '20px', fontWeight: 'bold', paddingTop: '5px' }}> Due </p>
              <input type="date" className="form-control" id="dueDate" name="dueDate" value={assignment?.Due}
                onChange={(e) => dispatch(setAssignments({ ...assignment, Due: e.target.value }))} />
              <div className="row" style={{ paddingTop: '5px' }}>
                <div className="col-md-6">
                  <p style={{ fontSize: '15px', fontWeight: 'bold' }}> Available From </p>
                </div>
                <div className="col-md-6">
                  <p style={{ fontSize: '15px', fontWeight: 'bold' }}> Until </p>
                </div>
              </div>
              <div className="row" style={{ paddingTop: '5px' }}>
                <div className="col-md-6">
                  <input type="date" className="form-control" id="availableFromDate" name="availableFromDate" value={assignment?.availableFrom}
                    onChange={(e) => dispatch(setAssignments({ ...assignment, availableFrom: e.target.value }))} />
                </div>
                <div className="col-md-6">
                  <input type="date" className="form-control" id="untilDate" name="untilDate" value={assignment?.Until}
                    onChange={(e) => dispatch(setAssignments({ ...assignment, Until: e.target.value }))} />
                </div>
              </div>
              <button className="btn btn-secondary" style={{ marginTop: '10px', width: '100%' }}>+Add</button>
            </div>
          </div>
        </div>
        <hr style={{ border: '1px solid', marginTop: '12px' }} />
        <div className="row">
          <div className="col-8">
            <div className="form-group">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                Notify content has changed
              </label>
            </div>
          </div>
          <div className="col-4">
            <div className="form-group" style={{ float: 'inline-end' }}>
              <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger float-end">
                Cancel
              </Link>
              <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                Save
              </button>
            </div>
          </div>
        </div>
        <hr style={{ border: '1px solid' }} />
      </div>
    </>
  );
}
export default AssignmentEditor;