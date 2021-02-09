import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman" >
        <p>This is children props</p>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman" >
        <button>Action</button>
      </Greet>
      <Greet name="Clark" heroName="Superman" />

      <Welcome name="Bruce" heroName="Batman"></Welcome>
      <Welcome name="Diana" heroName="Wonder Woman" ></Welcome>
      <Welcome name="Clark" heroName="Superman"></Welcome>
    </div>
  );
}

export default App;
