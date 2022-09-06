import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const TodoList = ({ todoList, onTodoClick }) => {
  const handleTodoClick = (todo, index) => {
    if (!onTodoClick) return;
    onTodoClick(todo, index);
  };
  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => {
        return (
          <li
            key={todo.id}
            className={`todo-item ${
              todo.status === "completed" ? "completed" : ""
            }`}
            onClick={() => handleTodoClick(todo, index)}
          >
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
};

export default TodoList;
