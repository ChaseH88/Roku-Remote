import React, { FC } from "react";
import { RokuConfigInterface } from "types/interfaces";

// Components
import { Tooltip } from 'antd';
import { Input } from 'antd';

// Hooks
// import { Types } from "../../hooks/useConfigState"

interface ConfigRowProps {
  handleChange: any,
  rowData?: RokuConfigInterface | null
}

const ConfigRow: FC<ConfigRowProps> = ({
  handleChange,
  rowData = null
}): JSX.Element => {

  const handle = ({ name, value }: any) => (
    handleChange(rowData?.id, {
      [name]: value
    })
  )

  return (
    <div className="form-row">
      <div className="form-elm">
        <label htmlFor="roku-base-url">IP Address</label>
        <Tooltip
          title="Invalid IP"
          color={'red'}
          key={'red'}
          visible={false}
        >
          <Input
            type="text"
            defaultValue={rowData?.base}
            id="roku-base-url"
            name="base"
            onChange={({ target }: any) => (
              handle(target)
            )}
          />
        </Tooltip>
      </div>
      <div className="form-elm">
        <label htmlFor="roku-base-url">TV Name</label>
        <Tooltip
          title="Invalid Team Name"
          color={'red'}
          key={'red'}
          visible={false}
        >
          <Input
            type="text"
            defaultValue={rowData?.name}
            id="roku-team"
            name="name"
            onChange={({ target }: any) => (
              handle(target)
            )}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export { ConfigRow };