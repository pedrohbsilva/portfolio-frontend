import { ReactElement, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { modalProps } from 'src/interfaces';

import {
  StyledModal,
  StyledModalHeader,
  StyledModalOverlay,
  StyledModalBody,
} from './styles';

const Modal = ({ show, onClose, children }: modalProps): ReactElement => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </StyledModalHeader>
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root'),
    );
  }
  return null;
};

export default Modal;
