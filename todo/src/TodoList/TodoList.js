import { useState, useEffect } from "react";
import "./TodoList.css";
const TodoList = (props) => {
  return (
    <>
      <div className="task">
        <label className="form-check-label d-block">
          <span className={props.checkedClass}>{props.newTask}</span>
        </label>
      </div>
    </>
  );
};
export default TodoList;
