import React from 'react';
import { BaseModalProps } from './types';
import './Modal.scss';
import Button from 'component-lib/Button';

interface ModalProps extends BaseModalProps {
  height?: number;
  isSubmitDisabled?: boolean;
  submitText?: string;
  title: string;
  width?: number;
}

const Modal = ({
    children,
    isOpen,
    isSubmitDisabled,
    onClose,
    onSubmit,
    submitText,
    title
}: ModalProps) => {
  const modalClass = isOpen ? 'visible' : '';
  const handleOnClose = () => {
    onClose?.();
  }

  const handleOnSubmit = () => {
    if (isSubmitDisabled) return;
    onSubmit?.();
    onClose?.();
  }

  return <div className={`Modal ${modalClass}`} >
    <div className="Modal__overlay" onClick={onClose}/>
    {isOpen ? <div className="Modal__container">
      <div className="Modal__title">
        {title}
      </div>
      <div className="Modal__content">

        {children}
      </div>
      <div className={"Modal__actions"}>
        {onSubmit && <Button onClick={handleOnSubmit} disabled={isSubmitDisabled} type="submit">{submitText || "Submit"}</Button>}
        <Button onClick={handleOnClose} type="neutral">Close</Button>
      </div>
    </div> : null}

  </div>
}

export default Modal
