import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [newTask, setNewTask] = useState({text: "", category: ""});

  function handleTextChange(event) {
    setNewTask({...newTask, text: event.target.value});
  }

  function handleCategoryChange(event) {
    setNewTask({...newTask, category: event.target.value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit(newTask);
    setNewTask({text: "", category: ""});
  }

  const options = categories.map((category, index) => {
    if(category !== "All"){
      return <option key={index} value={category}>{category}</option>
    }
  });

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" placeholder="New task" value={newTask.text} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={newTask.category} onChange={handleCategoryChange} >
          {/* render <option> elements for each category here */}
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
