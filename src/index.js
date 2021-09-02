import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";

const movieReducer = (state = {movie:[]}, action) => {
    switch (action.type) {
        case 'GET_MOVIE':
            console.log(action.payload)

            return {...state, movie: [...action.payload]};

        default:
            return state;
    }
}

const store = createStore(movieReducer)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
