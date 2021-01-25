import React, { FC, useEffect } from "react";
import { uniqueKey } from "../../utilities";
// import validator from 'validator';

// Components
import { Modal } from "../Modal";
import { ConfigRow } from "../ConfigRow";

// Styles
import "./config-container.scss";

// Hooks
import { useAppState, AppKey } from "../../hooks/useAppState";
import { useRokuConfig, useConfigState } from "../../hooks";
// import { RokuConfigInterface } from "types/interfaces";


const ConfigContainer: FC = (): JSX.Element => {

  const config = {
    id: uniqueKey(),
    base: '',
    name: '',
    dateAdded: new Date()
  };

  const { configState, dispatch, Types } = useConfigState();
  const { modalOpen } = useAppState(AppKey.app);
  const { configList } = useRokuConfig();

  useEffect(() => {

    let data = [ config ]
    configList?.length && (data = [
      ...configList,
      ...data
    ])
    dispatch({
      type: Types.SET_LOAD_STATE,
      payload: data
    })

  }, []);

  const handleButton = (e: any, func: any) => {
    e.preventDefault();
    func();
  }

  const handleSubmit = () => {
    console.log(configState)
  }


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
                      handleChange={dispatch}
                      rowData={config}
                    />
                    {configState.length === (i+1) ?
                      <button onClick={(e: any) => handleButton(e, dispatch({ type: Types.ADD }))}>Add</button> :
                      <button onClick={(e: any) => handleButton(e, dispatch({ type: Types.DELETE, payload: config.id }))}>Delete</button>
                    }
                  </div>
                )) :
                  <div key={'config.id'}>
                    <ConfigRow
                      handleChange={dispatch}
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