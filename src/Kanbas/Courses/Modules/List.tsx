import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";


function ModuleList() {
  const { courseId } = useParams();
  //  const modulesList = modules.filter((module) => module.course === courseId);
  //const [moduleList, setModuleList] = useState<any[]>(modules);
  
  const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);






  return (
    <>
      <div className="mb-3 wd-module-buttons">
        <button className="btn btn-secondary">Collapse All</button>
        <button className="btn btn-secondary">Expand All</button>
        <button className="btn btn-secondary">View Progress</button>
        <select>
          <option>Publish All</option>
          <option>Unpublish All</option>
          <option>Unpublish All</option>
        </select>
        <button className="btn btn-danger">+ Module</button>
      </div>
      <ul className="list-group wd-modules">
        <li className="list-group-item">

          <input style={{ marginLeft: "10px" }} value={module.name}
            onChange={(e) => setModule({
              ...module, name: e.target.value
            })}
          />
          <span className="float-right">
          <button style={{ marginLeft: "300px", width: "40px" }} className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
          <button style={{ marginLeft: "10px", width: "60px" }} className="btn btn-primary" onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
          </span>
          <br />
          <textarea style={{ marginTop: "10px", marginLeft: "10px", width: "180px" }} value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
          }
          />

        </li>

        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}>
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <button className="btn btn-danger" style={{ marginRight: "10px" }}
                    onClick={() => dispatch(deleteModule(module._id))}>
                    Delete
                  </button>
                  <button className="btn btn-success" style={{ marginRight: "10px" }}
                    onClick={() => dispatch(setModule(module))}>
                    Edit
                  </button>

                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: any, index: number) => (
                    <li className="list-group-item" key={index}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;