import './App.css';
import Livro from './components/livro';

function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#e9e6d7"
      }}
    >
      <Livro />
    </div>
  );
}

export default App;
