import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Catalog from './components/Catalog';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Menu />

      <Routes>
        <Route path="/" element={<h1>Главная страница</h1>} />
        <Route path="/about" element={<h1>Страница О НАС</h1>} />
        <Route path="/contact" element={<h1>Страница КОНТАКТЫ</h1>} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </div>
  );
}

export default App;
