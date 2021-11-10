import React, { useState } from 'react';

const Cat = () => {
  const [catUrl, setCatUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getCat = async () => {
    try {
      setError('');
      setIsLoading(true);
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search'
      );
      const data = await response.json();
      setCatUrl(data[0].url);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setError('Ошибка загрузки кота');
    }
  };

  return (
    <div>
      <button disabled={isLoading} onClick={getCat}>
        Показать кота
      </button>
      {catUrl && !error && !isLoading && (
        <div>
          <img src={catUrl} alt="Картинка кота" width="300" />
        </div>
      )}
      {isLoading && <p>Загружаю...</p>}
      {error && <p>{error}</p>}

      {/* {catUrl ? (
        <div>
          <img src={catUrl} alt="Картинка кота" width="300" />
        </div>
      ) : (
        <p>Пока картинки нету</p>
      )} */}
    </div>
  );
};

export default Cat;
