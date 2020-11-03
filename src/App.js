import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className={'Card'}>
          <h2>Red Mangrove</h2>
          <p>Rhizophora mangle</p>

          <span className={'Image-container'} style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/en/1/16/Red_mangrove-everglades_natl_park.jpg)'}}></span>

          <a href="#" className={'Button'}>Show image</a>
        </div>

      </header>
    </div>
  );
}

export default App;
