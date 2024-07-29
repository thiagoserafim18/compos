import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'thiago'
  const newName = name.toLocaleLowerCase()
  function sun(a, b) {
    return a + b
  }
  const url = 'https://via.placeholder.com/150'
  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Meu primeiro site</p>
      <p>Olá {newName}</p>
      <p>soma: {2 + 2}</p>
      <p>soma: {sun(1, 2)}</p>
      <img src={url} alt='minha imagem' />
      <HelloWorld />

    </div>
  );
}

export default App;