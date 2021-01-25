import React, { FC, Fragment, useState } from 'react';
import { Modal as AntModal, Button } from 'antd';
import { modalClosedAction } from "../../state/actions";
import { uniqueKey } from "../../utilities";
import "./modal.scss";

interface ModalProps {
  title?: string,
  handleOk?: any,
  open: boolean,
  showFooter?: boolean
  showCancelBtn?: boolean,
  showOkBtn?: boolean,
  cancelBtnText?: string,
  okBtnTest?: string,
  blockCancel?: boolean,
}

const Modal: FC<ModalProps> = ({
  title,
  children,
  open = false,
  handleOk = () => null,
  showFooter = true,
  showCancelBtn = true,
  showOkBtn = true,
  cancelBtnText = 'Cancel',
  okBtnTest = 'Submit',
  blockCancel = false
}): JSX.Element => {

  const [ loading, setLoading ] = useState<boolean>(false);
  const [ footerState ] = useState(showFooter ? [
    <Fragment key={uniqueKey()}>
      {showCancelBtn &&
        <Button
          key="back"
          onClick={() => handleCancel()}
          disabled={blockCancel}
        >
          {cancelBtnText}
        </Button>
      }
    </Fragment>,
    <Fragment key={uniqueKey()}>
      {showOkBtn &&
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleOk}
        >
          {!loading ? okBtnTest : ''}
        </Button>
      }
    </Fragment>,
  ]: []);

  const handleCancel = () => blockCancel ? null : modalClosedAction();

  return (
    <>
      <AntModal
        title={title}
        visible={open}
        onOk={(e) => {
          e.preventDefault();
          setLoading(true);
          handleOk();
          setLoading(false);
        }}
        onCancel={() => handleCancel()}
        footer={footerState}
      >
        {children}
      </AntModal>
    </>
  )
};

export { Modal };