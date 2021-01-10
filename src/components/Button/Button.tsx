import React, { FC } from "react";
import classNames from "classnames";
import "./button.scss";

export interface ButtonProps {
  name: string,
  text: any
  icon: string
  endpoint: string
}

const Button: FC<ButtonProps> = ({ name, text, icon, endpoint }: any): JSX.Element => {

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