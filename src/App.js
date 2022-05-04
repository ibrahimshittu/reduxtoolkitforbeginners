import { useSelector } from 'react-redux';
import store from './redux/store';
import './App.css';

function App() {

  const counter = useSelector(state => state.count);
  const Increment = () => {
    store.dispatch({ type: 'INCREMENT' });
  };
  const Decrement = () => {
    store.dispatch({ type: 'DECREMENT' });
  };

  return (
    <div className="App">
      <h1> Counter </h1>
      <h2>{ counter}</h2>
      <button onClick={Increment}>
        Increment
      </button>
      
      <button onClick={Decrement}>
        Increment
      </button>

    </div>
  );
}

export default App;
