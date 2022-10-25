import logo from "./styles/glasses1.png";
import Dictionary from "./components/Dictionary";
import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1>Dictionary</h1>
          <div className="app-img">
            <img src={logo} alt="glasses" className="rotateimg180" />
          </div>
        </header>
        <main>
          <Dictionary defaultKeyword="beautiful" />
        </main>
        <footer className="app-footer">
          <a
            href="https://github.com/annasvrv/dictionary-test-project"
            title="GitHub code"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/anna-svrv/"
            title="LinkedIn profile"
            target="_blank"
            rel="noreferrer"
          >
            AnnaS
          </a>
        </footer>
      </div>
    </div>
  );
}
