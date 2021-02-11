import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';

function App() {
  return (
    <div className="App">
      <HoverCounterTwo />
      <ClickCounterTwo />
      {/* <HoverCounter /> */}
      {/* <ClickCounter name='Vishwas'/> */}
    </div>
  );
}

export default App;
