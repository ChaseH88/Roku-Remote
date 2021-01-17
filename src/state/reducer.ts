import * as types from "./types";
import { defaultModalOpen } from "./helpers";

// Types
import { MainAppState, Action } from "../types/interfaces";

/**
 * The default app state
 */
export const initialState: MainAppState = {
  app: {
    modalOpen: defaultModalOpen()
  },
  rokuConfig: {
    baseSet: false,
    baseURL: null,
    lastUpdated: null
  },
  rokuRemote: {
    poweredOn: false,
    history: []
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

    case types.MODAL_OPEN:
      return {
        ...state,
        app: {
          modalOpen: true
        }
      }

    case types.MODAL_CLOSED:
      return {
        ...state,
        app: {
          modalOpen: false
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