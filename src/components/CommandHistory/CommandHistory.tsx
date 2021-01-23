import React, { FC } from "react";
import { Button } from "../Button";

const CommandHistory: FC = (): JSX.Element => {

  return(
    <div id="command-history">
      <div className="container">
        <Button
          text={'History'}
          icon={'fa-history'}
          name={'history'}
          keyCode={0}
        />
      </div>
    </div>
  )
}

export { CommandHistory }