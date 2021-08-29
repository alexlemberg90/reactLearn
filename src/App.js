
import './App.css';
import {useReducer} from "react";

const reducer = (state = 0, action) => {
  switch (action) {
      case 'INC':
          return state + 10;
      case 'DEC':
          return state - 2;
      default:
          return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h3>Obj - {state}</h3>
      <button onClick={() => dispatch('INC')}>Inc</button>
      <button onClick={() => dispatch('DEC')}>Dec</button>
    </div>
  );
}

export default App;

//є об'єкт, значення якого 0
// Стоврити 2 кнопки.
// Перша збільшує   значення на 10
// Друга зменшує на 2.
//
// Зміну стану та виведення реалізувати через redcer