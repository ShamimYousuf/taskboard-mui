import React from 'react';
import {useTasks} from '../../state/TasksProvider';


export const SummaryWidget = () => {

  const { searchResults} = useTasks();

  return <div className="summary-widget">
    { ['To Do', 'In Progress', 'Done'].map((status) => {

      return <div className="widget" key={status}>
        <h3>{status}</h3>
        <p>{ searchResults.filter( (task) => task.status === status ).length} Tasks</p>
      </div>;

    })}
  </div>;
};