import React from 'react';
import './CatalogItem.scss';

const CatalogItem = (props) => {
  return (
    <li className="catalog-item">
      <h3>{props.name}</h3>
      <img src={props.avatar} alt={`Аватар персонажа ${props.name}`} />
      <p>
        <b>Статус:</b> {props.status}
      </p>
      <p>
        <b>Расса:</b> {props.species}
      </p>
      <p>
        <b>Местоположение:</b> {props.place}
      </p>
    </li>
  );
};

export default CatalogItem;
