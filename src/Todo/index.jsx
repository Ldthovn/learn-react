import React, { useState } from "react";
import TodoList from "./TodoList";

const initTodoList = [
  { id: 1, title: "Eat", status: "new" },
  { id: 2, title: "Sleep", status: "completed" },
  { id: 3, title: "Code", status: "new" },
];

const Todo = () => {
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState("all");

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

  const renderedTodoList = todoList.filter(
    (item) => filteredStatus === "all" || filteredStatus === item.status
  );

  return (
    <>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <button onClick={handleShowAllClick}>All</button>
      <button onClick={handleShowCompletedClick}>Completed</button>
      <button onClick={handleShowNewClick}>New</button>
    </>
  );
};

Todo.propTypes = {};

export default Todo;
