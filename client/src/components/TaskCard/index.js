import React from 'react';

export const TaskCard = ({taskID, summary, epic, priority, assignee, status, handleOnDragStart}) => {
  return <div key={taskID} className="task-card"  draggable onDragStart={handleOnDragStart}>
    <h5>{taskID}</h5>
    <h6>{summary} </h6>
    <p>{epic}</p>
    <p>{priority}</p>
    <p>{assignee}</p>
    <p>{status}</p>
  </div>;
};