import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'

function App() {
  return (
    <div className="App">
      <Greet name="Diana" heroName="Wonder Woman" >
        <button>Action</button>
      </Greet>
      <Welcome name="Bruce" heroName="Batman"></Welcome>
      <Counter></Counter>
      <FunctionClick />
      <ClassClick />
      <EventBind />
    </div>
  );
}

export default App;
