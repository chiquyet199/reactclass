import React from 'react';

function FilterButtons(props) {
  const { filter, onButtonClick } = props;
  return (
    <div>
      <button onClick={()=>{onButtonClick('all')}} className={`show-all filter-button ${filter === "all" ? "active" : ""}`}>All</button>
      <button onClick={()=>{onButtonClick('done')}} className={`show-done filter-button  ${filter === "done" ? "active" : ""}`}>Done</button>
      <button onClick={()=>{onButtonClick('notdone')}} className={`show-not-done filter-button  ${filter === "notdone" ? "active" : ""}`}>Not Done</button>
    </div>
  );
}
export default FilterButtons;
