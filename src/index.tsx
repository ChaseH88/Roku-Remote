import React, { FC } from "react";
import ReactDOM from "react-dom";
import AppState from './state';
import { ButtonContainer } from "./components/ButtonContainer";
import './styles/_main.scss';

const App: FC = () => (
  <AppState>
    <ButtonContainer />
  </AppState>
);

const root = document.querySelector("#app");
ReactDOM.render(<App />, root);