import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <h1>Please leave feedback</h1>
      </header>
      <main className="main">
        <button className="button" type="button">
          Good
        </button>
        <button className="button" type="button">
          Neutral
        </button>
        <button className="button" type="button">
          Bad
        </button>
        <h2 className="Statistics">Statistics</h2>
        <ul className="list">
          <li className="item">
            <span className="label">Good</span>
            <span className="percentage">0</span>
          </li>
          <li className="item">
            <span className="label">Neutral</span>
            <span className="percentage">0</span>
          </li>
          <li className="item">
            <span className="label">Bad</span>
            <span className="percentage">0</span>
          </li>
        </ul>
        <div className="totalResult">
          <span className="total">Total 0</span>
          <span className="total">Positive feedback 0</span>
        </div>
      </main>
    </div>
  );
}

export default App;
