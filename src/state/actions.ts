import API from "../classes/API";

export const keySubmitAction = async (endpoint: string) => {
  try {
    const response = await new API().post(endpoint);
    console.log(response);
  }
  catch(err){
    console.log(err);
  }
}