import * as types from "./types";
import API from "../classes/API";
import { CommandHistoryInterface } from "../types/interfaces";

export const keySubmitAction = async (name: string, endpoint: string) => {
  try {

    // Add command to history
    addCommandHistoryAction(name, endpoint);

    const response = await new API().post(endpoint);
    console.log(response);
  }
  catch(err){
    console.log(err);
  }
}

export const addCommandHistoryAction = (name: string, command: string) => {

  const entry: CommandHistoryInterface = {
    name,
    command,
    timeStamp: new Date()
  }

  console.log(entry);

}

export const handleBaseRokuAction = (base: string) => {
  console.log(base)
}

export const modalOpenAction = () => (
  window.dispatch({
    type: types.MODAL_OPEN
  })
);


export const modalClosedAction = () => (
  window.dispatch({
    type: types.MODAL_CLOSED
  })
);