import './App.css';
import ExampleUseEffect from './components/ExampleUseEffect';
import ExampleUseRef from './components/ExampleUseRef';
import ExampleUseState from './components/ExampleUseState';

function App() {
  return (
    <div className="App">
      <h1>Hooks tutorial</h1>
      <ExampleUseState />
      <ExampleUseEffect />
      <ExampleUseRef />
    </div>
  );
}

export default App;
