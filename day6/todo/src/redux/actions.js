import { DELETE_TASK, ADD_TASK, UPDATE_TASK } from './actionTypes';

export const addTaskAction = (data) => {
  return {
    type: ADD_TASK,
    payload: data,
  };
};

export const deleteTaskAction = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const updateTaskAction = (updatedTask) => {
  return {
    type: UPDATE_TASK,
    payload: updatedTask,
  };
};
