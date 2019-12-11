import React from 'react';
import {connect} from 'react-redux';
import {changeFilter} from '../redux/actions'

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

const mapStateToProps = state => {
  return {
    filter:  state.filter
  }
}

const mapActionsToProps = dispatch => {
  return {
    onButtonClick: filterValue => {
      dispatch(changeFilter(filterValue))
    }
  }
}
export default connect(mapStateToProps, mapActionsToProps)(FilterButtons);
