import { AppKey } from "../../classes/Storage";
import { getFromStorage } from "../../utilities";

export const checkRokuConfig = () => {

  const base = getFromStorage(AppKey.rokuBaseURL);
  base && (window['rokuBaseURL'] = base);

  return {
    baseSet: !!base,
    baseURL: base ? base : null,
    lastUpdated: base ? new Date() : null
  }

}