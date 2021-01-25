import { AppKey } from "../../classes/Storage";
import { getFromStorage } from "../../utilities";
import { RokuConfigInterface } from "../../types/interfaces";

export const checkRokuConfig = () => {

  const configList = getFromStorage(AppKey.rokuConfigs);
  let selectedConfig = null;

  if(configList?.length){
    selectedConfig = configList?.length === 1 && (
      configList[0].id
    );
  }

  const selected: RokuConfigInterface | null = getFromStorage(AppKey.selectedConfig) || null;
  console.log(selected)

  selected && (
    window['rokuBaseURL'] = selected.base
  );

  return {
    selectedConfig,
    lastUpdated: selected ? new Date() : null
  }

}