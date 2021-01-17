import axios, { AxiosInstance } from "axios";
import { APIResponse, AxiosResponse } from "../types/interfaces";

declare global {
  interface Window {
    baseURL: string
  }
}

class API {

  protected key: string = '';
  protected token: string | null = null;

  protected api: AxiosInstance = axios.create({
    baseURL: `http://${window.rokuBaseURL}:8060/`,
    timeout: 1000 * 60, // one minute
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });

  constructor(){
    const token = localStorage.getItem('current-user');
    if(token){
      this.token = token;
    }
  }


  /**
   * This is the app's main get method.
   * @method GET
   * @param endpoint - The API endpoint
   * @returns An object containing success and the data
   */
  public async get(endpoint: string): Promise<APIResponse> {
    try {
      return(
        this.handleSuccess(
          await this.api.get(endpoint, this.token && this.authHeader(this.token)) as AxiosResponse
        )
      );
    }
    catch(err){
      return this.handleError(err);
    }
  }



  /**
   * This is the app's main post method.
   * @method POST
   * @param endpoint - The API endpoint
   * @param data - The data being sent with the post.
   * @returns {APIResponse} An object containing success and the data
   */
  public async post(endpoint: string, data: object = {}): Promise<any> {
    try {
      const response = await fetch(`http://${window.rokuBaseURL}:8060/${endpoint}`, {
        method: 'POST'
      });
      return response;
    }
    catch(err){
      return this.handleError(err);
    }
  }



  /**
   * Handle the API Success
   * @param response - The Axios response
   */
  protected handleSuccess(res: AxiosResponse): APIResponse {
    return res.data
  }



  /**
   * Handle the error
   * @param error - the error that was caught
   */
  protected handleError(err: any): APIResponse {
    const error: AxiosResponse = { ...err }
    return error.response.data;
  }


  /**
   * Create the Auth Header
   * @param token - the user's token
   */
  protected authHeader(token: string): any {
    return {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  }


}

export default API;