import React, { FC } from 'react';
import { Modal as AntModal } from 'antd';
import { modalClosedAction } from "../../state/actions";

interface ModalProps {
  title?: string,
  handleOk?: any,
  open: boolean
}

const Modal: FC<ModalProps> = ({
  title,
  children,
  open = false,
  handleOk = () => null
}): JSX.Element => (
  <>
    <AntModal
      title={title}
      visible={open}
      onOk={(e) => {
        e.preventDefault();
        handleOk();
      }}
      onCancel={() => modalClosedAction()}
    >
      {children}
    </AntModal>
  </>
);

export { Modal };