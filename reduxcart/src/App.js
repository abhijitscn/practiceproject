import React from "react";
import './App.css';
import Router from "./Pages/Router";
import {
  BrowserRouter,
} from "react-router-dom";
import {Provider} from 'react-redux';
import Store from "./Redux/Store";

function App() {
  return (
    <Provider store={Store}>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
