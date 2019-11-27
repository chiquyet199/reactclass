import React from 'react';

function FilterButtons(props) {
  const { filter } = props;
  return (
    <div>
      <button className={`show-all filter-button ${filter === "all" ? "active" : ""}`}>All</button>
      <button className={`show-done filter-button  ${filter === "done" ? "active" : ""}`}>Done</button>
      <button className={`show-not-done filter-button  ${filter === "notdone" ? "active" : ""}`}>Not Done</button>
    </div>
  );
}
export default FilterButtons;
