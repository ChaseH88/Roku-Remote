import React, { FC } from "react";
import { Button } from "../Button";
import "./button-container.scss";
import { useRokuButton } from "../../hooks";
import { CommandHistory } from "../CommandHistory";

const ButtonContainer: FC = (): JSX.Element => (
  <div id="button-container">
    <div className="container">

      <CommandHistory />

      {/* Arrows and Select Button */}
      <div className="arrows">
        <div className="top">
          <Button {...useRokuButton('up')} />
        </div>
        <div className="middle">
          <div className="left">
            <Button {...useRokuButton('left')} />
          </div>
          <div className="middle">
            <Button {...useRokuButton('select')} />
          </div>
          <div className="right">
            <Button {...useRokuButton('right')} />
          </div>
        </div>
        <div className="bottom">
          <Button {...useRokuButton('down')} />
        </div>
      </div>

      {/* Menu Buttons */}
      <div className="volume">
        <div className="container">
          <div>
            <Button {...useRokuButton('volume-down')} />
          </div>
          <div>
            <Button {...useRokuButton('volume-mute')} />
          </div>
          <div>
            <Button {...useRokuButton('volume-up')} />
          </div>
        </div>
      </div>

    </div>
  </div>
);

export { ButtonContainer };