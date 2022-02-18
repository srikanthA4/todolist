import React from "react";

export default function Filter({ onFilterChange }) {
  const filters = ["all", "active", "completed"];
  const clickHandler = (currentValue) => {
    onFilterChange(currentValue);
  }
  return (
    <ul className="nav nav-pills todo-nav">
      {filters.map(item => {
        return (<li
          key={item}
          role="presentation"
          className="nav-item all-task active"
          onClick={() => clickHandler(item)}>
        
            {item}
          </a>
        </li>)
      })}
    </ul>
  );
}
