import React, { FC, useEffect, useState } from "react";

// Styles
import './styles/_main.scss';
import 'antd/dist/antd.css';

// Hooks
import { AppKey, useAppState, useBodyStyle } from "./hooks";

// Containers
import { ButtonContainer } from "./components/ButtonContainer";
import { ConfigContainer } from "./components/ConfigContainer";

declare global {
  interface Window {
    rokuBaseURL: string
  }
}

const MainApp: FC = () => {

  const [ ready, setReady ] = useState(false);
  const { baseSet } = useAppState(AppKey.rokuConfig)

  useEffect(() => {

    console.log(window.rokuBaseURL)

    useBodyStyle('fontSize', '16px');

    if(window?.rokuBaseURL){
      setReady(true);
    }

  }, [baseSet]);

  return (
    ready ?
      <ButtonContainer /> :
      <ConfigContainer />
  );
}

export default MainApp;