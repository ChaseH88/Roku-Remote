import { RokuConfigInterface } from "../types/interfaces";
import { uniqueKey } from "../utilities/uniqueKey";
import { useReducer } from "react"

export enum Types {
  SET_LOAD_STATE = 'SET_LOAD_STATE',
  CHANGE = 'CHANGE',
  ADD = 'ADD',
  DELETE = 'DELETE'
}

/**
 * Handles the State for the Configuration Container
 * @example { config, dispatch, Types } = useConfigState();
 */
export const useConfigState = () => {

  const config = {
    id: uniqueKey(),
    base: '',
    name: '',
    dateAdded: new Date()
  };

  const configReducer = (state: any, { type, payload }: { type: string, payload: any }) => {
    switch (type) {

      case Types.SET_LOAD_STATE:
        return payload

      case Types.CHANGE:
        return state

      case Types.ADD:
        return [ ...state!, {
          id: uniqueKey(),
          base: '',
          name: '',
          dateAdded: new Date()
        }];

      case Types.DELETE:
        const data = state!.filter((config: any) => (
          config.id !== payload
        ));
        return data;

      default:
        return state;
    }
  };

  const [ configData, dispatch ] = useReducer(configReducer, [ config ]);

  return [ configData, dispatch ] as [ RokuConfigInterface[], React.Dispatch<any> ]

}