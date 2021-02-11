import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      <HoverCounter />
      <ClickCounter name='Vishwas'/>
    </div>
  );
}

export default App;
