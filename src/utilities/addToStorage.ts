import Storage from "../classes/Storage";

export const addToStorage = (key: string, value: any): void => {

  const storage = new Storage();
  const storedValue = storage.get(key);

  // Check if value is an array
  if(Array.isArray(value)){
    storage.add(
      key,
      storedValue ? [ ...storedValue, ...value ] : value
    );
    return;
  }

  if(typeof value === 'string'){
    storage.add(
      key,
      value
    );
    return;
  }

}
