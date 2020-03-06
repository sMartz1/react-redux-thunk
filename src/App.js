import React from 'react';
import store from './redux/store';

import './App.css';

import Header from './components/header';
import Datos from './components/Datos';

import { Provider } from 'react-redux';

function App() {
  return (
  <Provider store={ store }>
    <div className="App">
      <Header />
      <Datos />
    </div>
  </Provider>
  );
}

export default App;
