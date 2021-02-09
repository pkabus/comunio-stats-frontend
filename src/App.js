import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Greet name="Diana" heroName="Wonder Woman" >
        <button>Action</button>
        </Greet>
        <Welcome name="Bruce" heroName="Batman"></Welcome>
        <Counter></Counter>
    </div>
  );
}

export default App;
