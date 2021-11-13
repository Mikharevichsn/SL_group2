import React from 'react';
import { useSelector } from 'react-redux';

export const UserInfo = () => {
  const userName = useSelector((store) => store.user);
  return (
    <div>
      Текущий пользователь: <b>{userName}</b>
    </div>
  );
};
