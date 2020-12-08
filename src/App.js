import './App.css';
import kizikLogo from "./kizikAlbumCover.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={kizikLogo} className="Kizik-logo" alt="Kizik Album Cover" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://kizik.bandcamp.com/album/kizik"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kizik at Bandcamp.com
        </a>
      </header>
    </div>
  );
}

export default App;
