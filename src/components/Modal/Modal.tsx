import React, { useState } from 'react';
import { Modal as AntModal, Button as AntButton } from 'antd';

const Modal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <AntButton type="primary" onClick={showModal}>
        Open Modal
      </AntButton>
      <AntModal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </AntModal>
    </>
  );
};

export { Modal };