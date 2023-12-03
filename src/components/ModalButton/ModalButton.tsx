import React, { FC, useContext, useState } from 'react';
import { Modal } from '../Modal/Modal';
import cn from 'clsx';
import './ModalButton.sass';
import { useTranslation } from 'react-i18next';

export const ModalButton: FC = () => {
  const [modalContent, setModalContent] = useState<string>('modal content');
  const [showModal, setShowModal] = useState<boolean>(false);
  const { t } = useTranslation();

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={cn('modal-text')}>
        <input
          placeholder={'text for modal content here'}
          type={'text'}
          value={modalContent}
          onChange={(e) => setModalContent(e.target.value)}
        />
      </div>
      <div className={cn('modal-button-container')}>
        <button className={cn('modal-button')} onClick={() => setShowModal(true)}>
          {t('buttons.showModal')}
        </button>
      </div>
      <Modal visible={showModal} closeHandler={onClose} title={'Test'}>
        {modalContent}
      </Modal>
    </>
  );
};
