/**
   * Adds a property to the window object for use.
   * @param name Name of the key to add
   * @param value The value of your key
   */
  export const useSetValue = (name: string, value: any): void => (
    window[name as any] = value
  );
