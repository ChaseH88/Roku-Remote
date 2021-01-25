import React, { FC } from "react";
import { handleBaseRokuAction } from "state/actions";
// import validator from 'validator';

// Components
import { Modal } from "../Modal";
import { ConfigRow } from "../ConfigRow";

// Styles
import "./config-container.scss";

// Hooks
import { useAppState, AppKey } from "../../hooks/useAppState";
import { useConfigState, Types } from "../../hooks/useConfigState";


const ConfigContainer: FC = (): JSX.Element => {

  const [ configState, dispatch ] = useConfigState();
  const { modalOpen } = useAppState(AppKey.app);

  /**
   * Handles 'Add' and 'Delete' functionality
   * @param e Button click event
   * @param func Dispatch function
   */
  const handleButton = (e: any, func: any) => {
    e.preventDefault();
    func();
  }

  /**
   * Handle Configuration 'Submit' button
   */
  const handleSubmit = () => (
    handleBaseRokuAction(configState)
  )


  return (
    <div id="config-container">
      <Modal
        open={modalOpen}
        handleOk={() => handleSubmit()}
      >
        <form action="">
          <fieldset>
            <div className="config-container">
              {configState ?
                configState.map((config, i) => (
                  <div key={config!.id}>
                    <ConfigRow
                      handleChange={() => dispatch}
                      rowData={config}
                    />
                    {configState.length === (i+1) ?
                      <button
                        onClick={(e: any) => handleButton(e, () => dispatch({
                          type: Types.ADD
                        }))}
                      >
                        Add
                      </button>
                      :
                      <button
                        onClick={(e: any) => handleButton(e, () => dispatch({
                          type: Types.DELETE, payload: config.id
                        }))}
                      >
                        Delete
                      </button>
                    }
                  </div>
                )) :
                  <div key={'config.id'}>
                    <ConfigRow
                      handleChange={() => dispatch}
                      rowData={null}
                    />
                  </div>
              }
            </div>
          </fieldset>
        </form>
      </Modal>
    </div>
  );
};

export { ConfigContainer };