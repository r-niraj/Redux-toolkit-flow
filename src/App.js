import logo from './logo.svg';
import './App.css';
import CounterComp from './Components/CounterComp';
import CounterButtons from './Components/CounterButtons';

function App() {
  return (
    <div className="App">
      <CounterComp />
      <CounterButtons />
    </div>
  );
}

export default App;
