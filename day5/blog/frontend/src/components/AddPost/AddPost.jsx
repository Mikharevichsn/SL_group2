import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddPost.scss';

const AddPost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    text: '',
  });

  console.log('formData = ', formData);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(11111);

    try {
      const response = await fetch('/posts', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      if (result) {
        console.log(`Пост id № ${result.id} добавлен`);
        navigate('/blog');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add-post-wrapper">
      <form onSubmit={(event) => onSubmitHandler(event)}>
        <label>
          Название статьи
          <input
            type="text"
            value={formData.title}
            onChange={(event) => {
              setFormData({
                ...formData,
                title: event.target.value,
              });
            }}
          />
        </label>
        <label>
          Текст статьи
          <textarea
            value={formData.text}
            onChange={(event) => {
              setFormData({
                ...formData,
                text: event.target.value,
              });
            }}
          ></textarea>
        </label>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default AddPost;
