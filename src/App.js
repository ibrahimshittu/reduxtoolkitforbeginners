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
  const addBy = () => {
    store.dispatch({ type: 'ADD', payload: 8 });
  };

  return (
    <div className="App">
      <h1> Counter </h1>
      <h2>{ counter}</h2>
      <button onClick={Increment}>
        Increment
      </button>
      
      <button onClick={Decrement}>
        Decrement
      </button>
      <button onClick={ addBy }>
        Add By
      </button>

    </div>
  );
}

export default App;
