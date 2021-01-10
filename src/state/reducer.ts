import * as types from "./types";

// Types
import { MainAppState, Action } from "../types/interfaces";

/**
 * The default app state
 */
export const initialState: MainAppState = {
  rokuRemote: {
    poweredOn: false
  }
}

/**
 * The main context reducer to control app state changes
 * @param state - The main app state
 * @param {Action} - Includes the action name and payload
 */
export const reducer = (state: MainAppState, { type, payload }: Action): MainAppState => {
  switch (type) {

    // --- Roku TV Powered On ---
    case types.ROKU_POWER_ON:
      return {
        ...state,
        rokuRemote: {
          poweredOn: true
        }
      }

    // Clears the app state...the master reset!
    case types.CLEAR:
      return initialState;

    // default as needed......
      default:
        return state;
  }
}