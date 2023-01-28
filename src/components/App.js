import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTasks = tasks.filter(task => {
    if (selectedCategory === "All") {
      return true;
    }
    return task.category === selectedCategory;
  });


  function handleRemoveTaskClick(index) {
    const newTasks = [...tasks];
    newTasks.splice(index,1);
    setTasks(newTasks);
  }

  function handleCategoryClick(category) {
    setSelectedCategory(category);
  }
  
  function handleAddTask(task) {
    setTasks([...tasks, task]);
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryClick}
      />
      <NewTaskForm
       categories={CATEGORIES}
       onTaskFormSubmit={handleAddTask}
      />
      <TaskList
        tasks={filteredTasks}
        onRemoveTaskClick={handleRemoveTaskClick}
      />
    </div>
  );
}

export default App;
