import './App.css';
import ExampleUseEffect from './components/ExampleUseEffect';
import ExampleUseState from './components/ExampleUseState';

function App() {
  return (
    <div className="App">
      <h1>Hooks tutorial</h1>
      <ExampleUseState />
      <ExampleUseEffect />
    </div>
  );
}

export default App;
