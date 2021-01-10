import { useState, useEffect } from "react";

type KeyCode = { keyCode: number };

/**
 * Attaches keyup and keydown handlers to the window to detect
 * whether or not a particular key code has been pressed.
 * @param targetKey The key code
 * @returns {boolean}
 * @example const isPressed = useKeyPress(13);
 */
const useKeyPress = (targetKey: number): boolean => {

  const { addEventListener, removeEventListener } = window;
  const [keyPressed, setKeyPressed] = useState(false);

  const handler = ({ keyCode }: KeyCode, h: boolean) => (
    keyCode === targetKey && setKeyPressed(h)
  );

  useEffect(() => {

    addEventListener('keydown', (e: KeyboardEvent) => handler(e, true));
    addEventListener('keyup', (e: KeyboardEvent) => handler(e, false));

    return () => {
      removeEventListener('keydown', (e: KeyboardEvent) => handler(e, true));
      removeEventListener('keyup', (e: KeyboardEvent) => handler(e, false));
    };

  }, []);

  return keyPressed;
}

export { useKeyPress };