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
  keyCode: number,
  endpoint: string
}

export interface AxiosResponse {
  config: {
    method: string,
    timeout: number,
    baseURL: string,
    url: string
  },
  request: XMLHttpRequest,
  response: {
    data: APIResponse,
    headers: object
    status: number
    statusText: string
  },
  isAxiosError: boolean,
  toJSON: Function,
  data: APIResponse
}

export interface APIResponse {
  success: boolean,
  data?: any
  error?: string,
  token?: string
}