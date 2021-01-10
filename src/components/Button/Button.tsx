import React, { FC } from "react";
import classNames from "classnames";
import "./button.scss";
import { useKeyPress } from "../../hooks";

export interface ButtonProps {
  name: string,
  text: any,
  icon: string,
  keyCode: number,
  endpoint: string
}

const Button: FC<ButtonProps> = ({
  name,
  text,
  icon,
  keyCode,
  endpoint
}: ButtonProps): JSX.Element => {

  const keyPressed = useKeyPress(keyCode);

  keyPressed && console.log(text, keyPressed);

  const handleClick = (endpoint: string) => {
    console.log(endpoint);
  }

  return (
    <button
      name={name}
      className={classNames(
        'roku',
        'fa',
        icon
      )}
      onClick={() => (
        handleClick(endpoint)
      )}
    >
      <span>
        {text}
      </span>
    </button>
  );
};

export { Button };