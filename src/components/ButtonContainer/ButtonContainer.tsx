import React, { FC } from "react";
import { Button } from "../Button";
import "./button-container.scss";
import { useRokuButton } from "../../hooks";

const ButtonContainer: FC = (): JSX.Element => (
  <div id="button-container">
    <div className="container">
      <div className="arrows">
        <div className="top">
          <Button {...useRokuButton('up')} />
        </div>
        <div className="middle">
          <div className="left">
            <Button {...useRokuButton('left')} />
          </div>
          <div className="right">
            <Button {...useRokuButton('right')} />
          </div>
        </div>
        <div className="bottom">
          <Button {...useRokuButton('down')} />
        </div>
      </div>
    </div>
  </div>
);

export { ButtonContainer };