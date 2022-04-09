import { ReactNode, useEffect, useState } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  type: 'edit' | 'delete';
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: () => void;
}

const customStyles = {
  edit: {
    top: '50%',
    padding: '23px 34px 29px 30px',
    transform: 'translate(-50%, -50%)',
  },
  delete: {
    top: '124px',
    padding: '34px 34px 25px 49px',
    transform: 'translate(-50%)',
  },
};

export function Modal({ type, children, isOpen, setIsOpen }: ModalProps) {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);

  useEffect(() => {
    if (modalIsOpen !== isOpen) {
      setModalIsOpen(isOpen);
    }
  }, [isOpen, modalIsOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalIsOpen}
      ariaHideApp={false}
      style={{
        content: {
          top: customStyles[type].top,
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: customStyles[type].transform,
          background: '#fff',
          maxWidth: '723px',
          width: '100%',
          border: '1px solid #999999',
          padding: customStyles[type].padding,
        },
        overlay: {
          backgroundColor: 'rgba(119, 119, 119, 0.8)',
        },
      }}
    >
      {children}
    </ReactModal>
  );
}
