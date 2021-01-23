export enum AppKey {
  rokuBaseURL = 'rokuBaseURL',
  commandHistory = 'commandHistory',
  rokuConfigs = 'rokuConfigs'
}

class Storage {

  protected no_key_name: string = 'roku-remote-settings';
  protected main_key: string;

  constructor(main_key?: string){

    if(!main_key){
      this.main_key = this.no_key_name;
      return;
    }

    this.main_key = main_key;
  }

  /**
   * If a key is given, the corresponding object is returned. If not, everything is returned
   * @param key Optional: The key of the object
   */
  public get(key?: AppKey | any): any {

    let items: string | null = localStorage.getItem(this.main_key);
    let storage: { [key: string]: any[] } = {};

    // Nothing to return
    if(!items) return null;

    items?.length && (storage = JSON.parse(items));

    // Return all if no key specified
    if(!key) return storage;

    // If Key is given
    return storage[key as string];

  }

  /**
   * Adds a key and a value to the user's local storage object
   * @param key The key in which to storage the data
   * @param value The value containing the data
   */
  public add(key: AppKey | any, value: any, multi: boolean = false): void {

    let items: string | null = localStorage.getItem(this.main_key);
    let storage: object = {};

    items?.length && (storage = JSON.parse(items));

    localStorage.setItem(this.main_key, JSON.stringify({
      ...storage,
      [key as string]: !multi ? value : ''
    }));

    return;

  }


  /**
   * Adds a key and a value to the user's local storage object
   * @param key The key in which to storage the data
   * @param value The value containing the data
   */
  public delete(key?: AppKey | any): void {

    if(!key){
      localStorage.removeItem(this.main_key);
      return;
    }

    let items: string | null = localStorage.getItem(this.main_key);
    let storage: { [key: string]: any[] } = {};

    items?.length && (storage = JSON.parse(items));

    delete storage[key as string];

    localStorage.setItem(this.main_key, JSON.stringify(storage));

    return;

  }

}

  export default Storage;