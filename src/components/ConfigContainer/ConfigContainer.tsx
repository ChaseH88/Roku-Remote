import React, { FC, useState } from "react";
import { Tooltip } from 'antd';
import validator from 'validator';
import { useAppState, AppKey } from "../../hooks/useAppState";
import { Modal } from "../Modal";
import { handleBaseRokuAction } from "../../state/actions";
import "./config-container.scss";

const ConfigContainer: FC = (): JSX.Element => {

  const { modalOpen } = useAppState(AppKey.app);
  const [ base, setBase ] = useState<string>('');
  const [ error, setError ] = useState<boolean>(false);

  const handleChange = ({ value }: any): void => {
    setError(false);
    setBase(value);
  };

  const handleSubmit = (): void => {

    // Check if input is an IP
    if(validator.isIP(base)){
      return handleBaseRokuAction(base);
    }

    // Handle error
    setError(true);
    setBase('');

  };

  return (
    <div id="config-container">
      <Modal
        open={modalOpen}
        handleOk={() => handleSubmit()}
      >
        <form action="">
          <fieldset>
            <div className="container">
              <div className="form-elm">
                <label htmlFor="roku-base-url">IP Address</label>
                <Tooltip
                  title="Invalid IP"
                  color={'red'}
                  key={'red'}
                  visible={error}
                >
                  <input
                    type="text"
                    id="roku-base-url"
                    onChange={({ target }: any) => (
                      handleChange(target)
                    )}
                  />
                </Tooltip>
              </div>
            </div>
          </fieldset>
        </form>
      </Modal>
    </div>
  );
};

export { ConfigContainer };