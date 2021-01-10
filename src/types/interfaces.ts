export interface MainAppState {
  rokuRemote: RokuRemoteState
}

export interface RokuRemoteState {
  poweredOn: boolean
}

export interface Action {
  type: string,
  payload: any
}

export interface RokuButton {
  name: string,
  text: string,
  icon: string,
  endpoint: string
}