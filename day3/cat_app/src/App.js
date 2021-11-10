import { useState } from 'react';
import Cat from './components/Cat';
import Example from './components/Example';

function App() {
  const [isExampleShown, setIsExampleShown] = useState(true);
  return (
    <div className="App">
      {/* <Cat /> */}
      <button onClick={() => setIsExampleShown(!isExampleShown)}>
        Скрыть/показать
      </button>
      {isExampleShown && <Example />}
    </div>
  );
}

export default App;
