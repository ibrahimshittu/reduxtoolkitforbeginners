import { useSelector, useDispatch } from 'react-redux';
import { actions } from './redux/store';
import './App.css';

function App() {

  const counter = useSelector(state => state.count);
  const dispatch = useDispatch();


  const Increment = () => {
    dispatch(actions.increment());
  };
  const Decrement = () => {
    dispatch(actions.decrement());

  };
  const addBy = () => {
    dispatch(actions.add(9));

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
