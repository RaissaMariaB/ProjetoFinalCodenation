import React from 'react';
import Router from './routes'
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import './scss/theme/index.scss'
import './App.scss';
import { persistor, store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Router>
      </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
