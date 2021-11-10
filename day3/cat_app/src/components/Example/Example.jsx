import React, { useState, useEffect } from 'react';

const Example = () => {
  const [random, setRandom] = useState(0);
  const [random2, setRandom2] = useState(0);

  useEffect(() => {
    console.log('Every render');
  }); // every render

  useEffect(() => {
    console.log('First render');
  }, []); // 1 render

  useEffect(() => {
    console.log('random changed');
  }, [random]); // когда изменится переменная в массиве

  useEffect(() => {
    return () => {
      console.log('unmount');
    };
  }, []); // unmount (размонтирование компонента)

  return (
    <div>
      <h1>{random}</h1>
      <button
        onClick={() => {
          setRandom(Math.round(Math.random() * 100));
        }}
      >
        Рандом
      </button>

      <h1>{random2}</h1>
      <button
        onClick={() => {
          setRandom2(Math.round(Math.random() * 100));
        }}
      >
        Рандом
      </button>
    </div>
  );
};

export default Example;
