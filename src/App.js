import Navbar from "./components/Navbar";
import Home from "./routes/Home";

// I M P O R T   S C S S
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
