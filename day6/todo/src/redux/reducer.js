import { DELETE_TASK, ADD_TASK, UPDATE_TASK } from './actionTypes';

export const reducer = (store, action) => {
  switch (action.type) {
    case ADD_TASK:
      console.log('store = ', store);
      return {
        ...store,
        tasks: [...store.tasks, action.payload],
      };

    case DELETE_TASK:
      const filteredTasks = store.tasks.filter(
        (el) => el.id !== action.payload
      );
      return {
        ...store,
        tasks: filteredTasks,
      };

    case UPDATE_TASK:
      const updatedTasks = store.tasks.map((el) => {
        if (el.id === action.payload.id) {
          return action.payload;
        }

        return el;
      });
      return {
        ...store,
        tasks: updatedTasks,
      };

    default:
      return store;
  }
};

// action
// {
//   type: 'ADD_TASK',
//   payload: '???' - полезная нагрузка
// }
