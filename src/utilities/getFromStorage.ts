import Storage from "../classes/Storage";

export const getFromStorage = (key: string): any => {

  const storage = new Storage();
  const storedValue = storage.get(key);

  return storedValue

}
