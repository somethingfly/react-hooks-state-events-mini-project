import React from "react";

function Task({ category, text, onRemoveTaskClick, index }) {

  function handleClick() {
     onRemoveTaskClick(index);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
