import React, { FC } from "react";
import ReactDOM from "react-dom";
import MainApp from "./app";

// State
import AppState from './state';

// Styles
import './styles/_main.scss';

const App: FC = () => (
  <AppState>
    <MainApp />
  </AppState>
);

const root = document.querySelector("#app");
ReactDOM.render(<App />, root);