
import React, {createContext, useContext, useState} from 'react';

const TasksContext = createContext();
export const TasksProvider = ( {children }) => {

  const taskList = [
    {
      '_id': 'TASK-1',
      'title': 'Fish coconut curry',
      'epic': 'Curries',
      'priority': 1,
      'assignee': 'Shamim',
      'status': 'To Do'
    },

    {
      'taskID': 'TASK-2',
      'title': 'Panneer mutter masala',
      'epic': 'Curries',
      'priority': 2,
      'assignee': 'Ashok',
      'status': 'In Progress'
    },

    {
      'taskID': 'TASK-3',
      'title': 'Living room decoration',
      'epic': 'Painting',
      'priority': 4,
      'assignee': 'Faizal',
      'status': 'Done'
    },

    {
      'taskID': 'TASK-4',
      'title': 'Kitchen Roof',
      'epic': 'Painting',
      'priority': 3,
      'assignee': 'Chetna',
      'status': 'To Do'
    },

    {
      'taskID': 'TASK-5',
      'title': 'Outer wall',
      'epic': 'Painting',
      'priority': 4,
      'assignee': 'Saji',
      'status': 'In Progress'
    },

    {
      'taskID': 'TASK-6',
      'title': 'Roses at the back garden',
      'epic': 'Gardening',
      'priority': 4,
      'assignee': 'Sahu',
      'status': 'To Do'
    },
  ];


  const [tasks, setTasks ] = useState(taskList);
  const [searchResults, setSearchResults] = useState(taskList);

  const tasksCategory = {
    searchResults,
    setSearchResults,
    tasks,
    setTasks
  };

  return(
    <TasksContext.Provider value={tasksCategory}>
      {children}
    </TasksContext.Provider>
  );

};

export const useTasks = () => useContext(TasksContext);