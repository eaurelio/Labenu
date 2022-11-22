import './App.css';
import Filho from './assets/Filho';
import { useState } from 'react';

function App() {
  const [nome, setNome] = useState('Me altere!')

  const changeNome = () => {
    setNome('Alterado!')
  }
  const reset = () => {
    setNome('Me altere!')
  }

  return (
    <>
    <h1>Pai</h1>
      <div>{nome}</div>
      <Filho changeNome={changeNome} reset={reset} />
    </>
  );
}

export default App;
