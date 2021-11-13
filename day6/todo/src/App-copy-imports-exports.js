import React, { useState, useEffect } from 'react';
import Zzz from './CatalogItem';
import fff, { print as myFunc, printWithStars, a, arr } from './common';
import { API_URL } from './constants';

function App() {
  console.log(fff);
  console.log(arr);
  console.log(API_URL);
  console.log(a);
  myFunc(123);
  printWithStars(123);
  return (
    <div className="App">
      1234
      <Zzz />
    </div>
  );
}

export default App;
