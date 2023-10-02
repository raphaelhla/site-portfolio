import myPhoto from './myPhoto.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <div className="App-tittle">
          <h1>Site de Raphael Agra</h1>

          <img src={myPhoto} className="my-photo" alt="logo" />
        </div>
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/raphael-agra-498569196/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>

        <a
          className="App-link"
          href="https://github.com/raphaelhla"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
  );
}

export default App;
