import React, { useState } from "react";
import TodoList from "./components/TodoList";

const initTodoList = [
  { id: 1, title: "Eat", status: "new" },
  { id: 2, title: "Sleep", status: "completed" },
  { id: 3, title: "Code", status: "new" },
];

const TodoFeature = (props) => {
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState("all");

  const handleTodoClick = (todo, index) => {
    // Clone current array to the new one
    const newTodoList = [...todoList];
    console.log(index, todo);

    // Toggle State
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };

    // Update todo list
    setTodoList(newTodoList);
  };

  const handleFilter = (status) => {
    setFilteredStatus(status);
  };

  const renderedTodoList = todoList.filter(
    (todo) => filteredStatus === "all" || filteredStatus === todo.status
  );

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={() => handleFilter("all")}>Show All</button>
        <button onClick={() => handleFilter("completed")}>
          Show Completed
        </button>
        <button onClick={() => handleFilter("new")}>Show New</button>
      </div>
    </div>
  );
};

TodoFeature.propTypes = {};

export default TodoFeature;
