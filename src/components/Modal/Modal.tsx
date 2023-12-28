import React, { FC } from 'react';
import './Modal.sass';
import cn from 'clsx';
import { createPortal } from 'react-dom';

interface ModalProps {
  visible: boolean;
  closeHandler: () => void;
  children: any;
  title: string;
}

export const Modal: FC<ModalProps> = ({ visible = false, closeHandler, children = '', title = '' }) => {
  return createPortal(
    <>
      {visible && (
        <div className={cn('modal')}>
          <article className={cn('modal-container')}>
            <header>
              <span className={cn('close')} onClick={closeHandler}>
                &times;
              </span>
              <h1>{title}</h1>
            </header>
            <section className={cn('modal-content')}>{children}</section>
          </article>
        </div>
      )}
    </>,
    document.body
  );
};
