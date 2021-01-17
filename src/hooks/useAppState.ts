import { useContext } from "react";
import { AppState } from "../types/interfaces";
import { State } from "../state";

export enum AppKey {
  app = 'app',
  rokuConfig = 'rokuConfig',
  rokuRemote = 'rokuRemote'
}

const useAppState = (key?: AppKey): { [key: string]: any } => {

  const appState = useContext(State)[0];

  if(key){
    return appState[key]
  }

  return appState as AppState;

};

export { useAppState };