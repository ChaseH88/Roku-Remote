import { useReducer, useEffect } from "react"
import { RokuConfigInterface } from "../types/interfaces";
import { uniqueKey } from "../utilities/uniqueKey";
import { useRokuConfig } from "../hooks";

export enum Types {
  SET_LOAD_STATE = 'SET_LOAD_STATE',
  CHANGE         = 'CHANGE',
  ADD            = 'ADD',
  DELETE         = 'DELETE'
}

/**
 * Handles the State for the Configuration Container
 * @example [ config, dispatch ] = useConfigState();
 */
export const useConfigState = () => {

  const config = {
    id: uniqueKey(),
    base: '',
    name: '',
    dateAdded: new Date()
  };

  // Fetch roku config saved in local storage
  const { configList } = useRokuConfig();
  let startingState: RokuConfigInterface[] | null = configList ?
    [ ...configList, config ] : [ config ]
  ;

  useEffect(() => {

    let data = [ config ]
    configList?.length && (startingState = [
      ...configList,
      ...data
    ])

  }, []);

  const configReducer = (state: any, { type, payload }: { type: string, payload: any }) => {
    switch (type) {

      // Handle initial component load state
      case Types.SET_LOAD_STATE:
        return payload

      // Handle the updating of an existing config by id
      case Types.CHANGE:
        const { id, value } = payload;
        const index = state.map((config: any) => config.id).indexOf(id);
        const [ key ]: any = Object
          .entries(value)
          .map(([ a, b ]: [any, any]) => [ a, b ]);
        state[index][key[0]] = key[1];
        return state

      // Adds a blank/empty config with unique id to state
      case Types.ADD:
        return [ ...state!, config];

      // Delete a config by id
      case Types.DELETE:
        return state!.filter((config: any) => (
          config.id !== payload
        ));

      // Default
      default:
        return state;
    }
  };

  return useReducer(configReducer, startingState) as [
    RokuConfigInterface[],
    React.Dispatch<{ type: string, payload?: any }>
  ]

}