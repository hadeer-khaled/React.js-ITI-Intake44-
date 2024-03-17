import { useState, useEffect } from "react";
import TodoList from "../TodoList/TodoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// import BasicButton from "../Button/BasicButton";
import "./TodoWrapper.css";
const TodoWrapper = () => {
  const [todosList, setTodosList] = useState([
    {
      id: 0,
      name: "html",
      done: false,
    },
  ]);
  const [newTaskName, setnewTaskName] = useState("");

  const handleTaskName = (e) => {
    console.log(e.target.value);
    setnewTaskName(e.target.value);
  };
  const handleAddTask = () => {
    let newTask = {
      id: todosList.length,
      name: newTaskName,
    };
    setTodosList([...todosList, newTask]);
    console.log(newTask);
  };

  const handleDeleteTask = (e, id) => {
    const tempArr = todosList.filter((todo) => id !== todo.id);
    console.log(tempArr);
    setTodosList([...tempArr]);
  };
  const handleToggleDone = (id) => {
    const updatedTodosList = todosList.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodosList(updatedTodosList);
  };

  return (
    <div className="container">
      <h2 className="mb-4 text-primary-emphasis">To-Do App</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a task"
          onChange={handleTaskName}
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={handleAddTask}>
          Add
        </button>
      </div>
      <div className="todos-list d-flex flex-column">
        {todosList.length === 0 ? (
          <div> no courses found</div>
        ) : (
          todosList.map((todo, index) => {
            return (
              <div className="task-container form-check d-flex w-100 justify-content-between">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={todo.done}
                  onChange={() => handleToggleDone(todo.id)}
                />
                <TodoList
                  key={`todo-${index}`}
                  newTask={todo.name}
                  style={{
                    textDecoration: todo.done ? "line-through" : "none",
                  }}
                  checkedClass={todo.done ? "done-task" : ""}></TodoList>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={(e) => handleDeleteTask(e, todo.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default TodoWrapper;
