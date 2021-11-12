import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.scss';

const Layout = (props) => {
  return (
    <div className="layout">
      <header className="header">
        <div className="logo">CompanyName</div>
      </header>

      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/blog">Блог</Link>
        </li>
        <li>
          <Link to="/add-post">Добавить статью</Link>
        </li>
        <li>
          <Link to="/contact">Контакты</Link>
        </li>
      </ul>

      {props.children}
    </div>
  );
};

export default Layout;
