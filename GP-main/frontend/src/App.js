import NavBar from './Components/NavBar'
import './App.css';
import Home from './Components/Home';
import News from './Components/News';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <News />
    </div>
  );
}

export default App;
