import React, { useState } from 'react';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import { addTaskAction } from '../../redux/actions';

export const ToDoAddTask = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');

  console.log('inputText = ', inputText);

  const btnOnClickHandler = () => {
    const task = {
      id: shortid.generate(),
      title: inputText,
    };
    console.log('task = ', task);

    // dispatch({
    //   type: 'ADD_TASK',
    //   payload: task,
    // });

    dispatch(addTaskAction(task));
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={btnOnClickHandler}>Добавить задачу</button>
    </div>
  );
};
