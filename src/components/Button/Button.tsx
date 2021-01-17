import React, { FC, useEffect } from "react";
import classNames from "classnames";
import { useKeyPress } from "../../hooks";
import { keySubmitAction } from "../../state/actions";
import "./button.scss";

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

  useEffect(() => {
    keyPressed && handleClick(endpoint);
  }, [keyPressed]);

  const handleClick = (endpoint: string) => {
    keySubmitAction(name, endpoint)
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