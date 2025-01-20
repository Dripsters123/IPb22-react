import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="box">
        <h1>Atbildes</h1>
        <h2>Kas ir prasības?</h2>
        <p>Prasības attiecas uz to, ko sistēmai vajadzētu darīt. Tās ir nepieciešamības un funkcijas, kuras gala produkts vai sistēma ir paredzēts nodrošināt. Prasības var būt:</p>
        <p><strong>Funkcionālās prasības:</strong> Tās nosaka konkrētas funkcijas vai uzdevumus, ko sistēmai jāveic. Piemēram, lietotājam jāspēj veikt pieteikšanos sistēmā.</p>
        <p><strong>Nefunkcionālās prasības:</strong> Tās nosaka sistēmas darbības veiktspēju un kvalitāti, piemēram, ātrumu, drošību, uzticamību.</p>
      </div>
      <div className="box">
        <h2>Kas ir prasību specifikācija?</h2>
        <p>Prasību specifikācija ir dokumentācija, kas izstrādāta, lai detalizēti aprakstītu prasības. Tā ietver visus projektam nepieciešamos aspektus, lai nodrošinātu, ka gala produkts atbilst visām prasībām. Prasību specifikācija var ietvert:</p>
        <p><strong>Funkcionālās specifikācijas:</strong> Detalizētas aprakstīto funkciju un to mijiedarbības shēmas.</p>
        <p><strong>Tehniskās specifikācijas:</strong> Informācija par tehnoloģiju, platformu, infrastruktūru u.c.</p>
      </div>
      <div className="box">
        <h2>Un ar ko viena atšķirās no otras?</h2>
        <p><strong>Prasības</strong> ir augsta līmeņa norādījumi par to, ko sistēmai vajadzētu darīt vai kā tā jādarbojas.</p>
        <p><strong>Prasību specifikācija</strong> ir detalizēts dokuments, kas apraksta prasības un nodrošina vadlīnijas izstrādātājiem un citiem iesaistītajiem dalībniekiem, lai nodrošinātu, ka gala produkts atbilst visām noteiktajām prasībām.</p>
      </div>
    </div>
  );
}

export default App;
