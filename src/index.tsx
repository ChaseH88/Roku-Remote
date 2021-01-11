import React, { FC } from "react";
import ReactDOM from "react-dom";
import AppState from './state';
import { ButtonContainer } from "./components/ButtonContainer";
import './styles/_main.scss';
import { useBodyStyle } from "./hooks";

const App: FC = () => {

  useBodyStyle('fontSize', '16px');

  return (
    <AppState>
      <ButtonContainer />
    </AppState>
  );
}


const root = document.querySelector("#app");
ReactDOM.render(<App />, root);