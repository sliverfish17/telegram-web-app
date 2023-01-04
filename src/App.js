import { useEffect } from "react";
import "./App.css";
// window.Telegram.WebApp;

const telegram = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    telegram.ready();
  }, []);

  return (
    <div className="App">
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
