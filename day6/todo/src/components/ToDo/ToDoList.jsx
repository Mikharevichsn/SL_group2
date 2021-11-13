import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTaskAction, updateTaskAction } from '../../redux/actions';

export const ToDoList = () => {
  const dispatch = useDispatch();
  const list = useSelector((store) => store.tasks);
  const [editingTask, setEditingTask] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  console.log('list = ', list);

  const btnDeleteHanler = (id) => {
    console.log('id = ', id);
    dispatch(deleteTaskAction(id));
  };

  const btnUpdateHandler = () => {
    const updatedTask = {
      ...editingTask,
      title: newTaskTitle,
    };

    console.log('updatedTask = ', updatedTask);
    dispatch(updateTaskAction(updatedTask));
    setEditingTask(null);
  };

  return (
    <div>
      <ul>
        {list.map((task) => {
          return (
            <li key={task.id}>
              {task.title}{' '}
              <button
                onClick={() => {
                  setEditingTask(task);
                  setNewTaskTitle(task.title);
                }}
              >
                Редактировать
              </button>
              <button onClick={() => btnDeleteHanler(task.id)}>Удалить</button>
            </li>
          );
        })}
      </ul>

      {editingTask && (
        <div>
          Редактирование задачи
          <h4>Текущее название: {editingTask.title}</h4>
          <label>
            Новое название:
            <input
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
            />
            <button onClick={btnUpdateHandler}>Обновить</button>
          </label>
        </div>
      )}
    </div>
  );
};
