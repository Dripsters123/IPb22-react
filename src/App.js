import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="box">
        <h1>Atbildes</h1>
        <h2>Kas ir prasības?</h2>
        <p>Prasības ir uzdotie uzdevumi.</p>
        
      </div>
      <div className="box">
        <h2>Kas ir prasību specifikācija?</h2>
        <p>Prasību specifikācija ir prasību apraksts / instrukcija. </p>
       
      </div>
      <div className="box">
        <h2>Un ar ko viena atšķirās no otras?</h2>
        <p><strong>Prasības</strong> ir uzdevumi.</p>
        <p><strong>Prasību specifikācija</strong> ir detalizētāks apraksts ,kā darīt prasības.</p>
      </div>
    </div>
  );
}

export default App;
