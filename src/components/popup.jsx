import React from 'react';
import Modal from 'react-modal';

function Popup(props) {
  const { isOpen, onRequestClose, children } = props;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      {children}
    </Modal>
  );
}

export default Popup;