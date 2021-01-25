import { AppKey } from "../classes/Storage";
import { getFromStorage } from "../utilities";

interface UseRokuConfig {
  configList: any
}

const useRokuConfig = (): UseRokuConfig => {

  const configList = getFromStorage(AppKey.rokuConfigs);

  return { configList } as UseRokuConfig;

}

export { useRokuConfig }