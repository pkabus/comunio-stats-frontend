import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';

function App() {
  return (
    <div className="App">
      <LifecycleA />
      {/* <Form /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <Greet name="Diana" heroName="Wonder Woman" > */}
      {/* <button>Action</button> */}
      {/* </Greet> */}
      {/* <Welcome name="Bruce" heroName="Batman"></Welcome> */}
      {/* <Counter></Counter> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
    </div>
  );
}

export default App;
