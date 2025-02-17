import {TaskCard} from '../TaskCard';
import React, {useState} from 'react';
import {useTasks} from '../../state/TasksProvider';

export const TaskBoard = () => {

  const [draggedTaskId, setDraggedTaskID] = useState(null);

  const TO_DO = 'To Do';
  const IN_PROGRESS = 'In Progress';
  const DONE = 'Done';

  const statuses = [ TO_DO, IN_PROGRESS, DONE];
  const { searchResults,
    setSearchResults} = useTasks();


  const handleDragStart = (id) => {
    setDraggedTaskID(id);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (status) => {

    if(draggedTaskId == null) return;

    setSearchResults((prevTasks) => prevTasks.map((task) => task.taskID === draggedTaskId ? { ...task, status} : task));
  };

  return (
    <div className="task-board">
      {
        statuses.map((status) => (
          <div className="task-column" key={status} onDragOver={handleDragOver} onDrop={ () => handleDrop(status)}>
            <h3>{status}</h3>

            {searchResults.filter((task) => task.status === status)
              .map((task) => <TaskCard key={task.taskID} handleOnDragStart={() => handleDragStart(task.taskID)} taskID={task.taskID} assignee={task.assignee} status={task.status} summary={task.summary} epic={task.epic} priority={task.priority}/> )

            }

          </div>

        ))
      }
    </div>
  );
};