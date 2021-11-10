import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ToDoList.css';

const ToDoList = () => {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([
    { id: uuidv4(), title: 'Купить хлеб' },
    { id: uuidv4(), title: 'Сходить в магазин' },
    { id: uuidv4(), title: 'Выучить реакт' },
  ]);

  console.log('inputText = ', inputText);

  const add = () => {
    if (inputText.trim() === '') return alert('Пустоту добавлять нельзя');

    if (
      tasks.some(
        (task) =>
          task.title.toLowerCase().trim() === inputText.toLowerCase().trim()
      )
    ) {
      return alert('Такая задача уже есть в списке');
    }

    console.log('add task');

    // const newTasks = [...tasks];
    // newTasks.push({ id: uuidv4(), title: 'Новая задача' });
    // setTasks(newTasks);

    // const newTasks = [...tasks, { id: uuidv4(), title: 'Новая задача' }];
    // setTasks(newTasks);

    setTasks([...tasks, { id: uuidv4(), title: inputText }]);
    setInputText('');
  };

  const del = (id) => {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-wrapper">
      <input
        type="text"
        value={inputText}
        placeholder="Название задачи"
        // onChange={(event) => {
        //   setInputText(event.target.value);
        // }}
        onChange={(event) => setInputText(event.target.value)}
      />
      <button onClick={add}>Добавить задачу</button>
      <ul>
        {tasks.map((elem) => {
          return (
            <li key={elem.id}>
              {elem.title}{' '}
              <button className="btn-delete" onClick={() => del(elem.id)}>
                Удалить
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
