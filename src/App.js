import './App.css';
import Appbar from './components/Appbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Appbar />
        <LandingPage />
      </header>
    </div>
  );
}

export default App;
