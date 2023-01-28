import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectCategory}) {

  const buttons = categories.map((category, index) => {
    return (
      <button
        key={index}
        onClick={() => onSelectCategory(category)}
        className={category === selectedCategory ? "selected" : ""}
       >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {buttons}
    </div>
  );
}

export default CategoryFilter;
