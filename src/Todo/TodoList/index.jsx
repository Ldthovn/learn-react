import React from "react";
import "./style.scss";
const TodoList = ({ todoList, onTodoClick }) => {
  const handleClick = (todo, index) => {
    if (!onTodoClick) return;
    onTodoClick(todo, index);
  };

  return (
    <ul>
      {todoList.map((todo, index) => {
        return (
          <li
            className={`${todo.status === "completed" ? "completed" : ""}`}
            key={todo.id}
            onClick={() => handleClick(todo, index)}
          >
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {};

export default TodoList;
