import React, { useState } from "react";
import TodoList from "./TodoList";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const initTodoList = [
  { id: 1, title: "Eat", status: "new" },
  { id: 2, title: "Sleep", status: "completed" },
  { id: 3, title: "Code", status: "new" },
];

const Todo = () => {
  const location = useLocation();
  console.log('location', location)
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    console.log(params)
    return "all";
  });

  const handleTodoClick = (todo, index) => {
    console.log(todo, index);
    // Clone current array to the new one
    const newTodoList = [...todoList];

    // Toggle state
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "completed" ? "new" : "completed",
    };

    // Update todo list
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilteredStatus("all");
  };

  const handleShowCompletedClick = () => {
    setFilteredStatus("completed");
  };

  const handleShowNewClick = () => {
    setFilteredStatus("new");
  };

  return (
    <>
      <TodoList todoList={filteredStatus} onTodoClick={handleTodoClick} />
      <button onClick={handleShowAllClick}>All</button>
      <button onClick={handleShowCompletedClick}>Completed</button>
      <button onClick={handleShowNewClick}>New</button>
    </>
  );
};

Todo.propTypes = {};

export default Todo;
