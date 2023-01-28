import React from "react";
import Task from "./Task";

function TaskList({ tasks, onRemoveTaskClick }) {

  const listOfTasks = tasks.map((data, index)  => {
    return (
      <Task
        key={index}
        category={data.category}
        text={data.text}
        onRemoveTaskClick={onRemoveTaskClick}
        index={index}
      />
    );
  });

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {listOfTasks}
    </div>
  );
}

export default TaskList;
