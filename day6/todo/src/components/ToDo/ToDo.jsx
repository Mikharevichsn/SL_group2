import React from 'react';
import { ToDoList } from './ToDoList';
import { ToDoAddTask } from './ToDoAddTask';

export const ToDo = () => {
  return (
    <div>
      <h1>Список задач</h1>
      <ToDoAddTask />
      <ToDoList />
    </div>
  );
};
