import React, { FC, useState } from 'react';
import { OperationsList as List } from '@/components/OperationsList/OperationsList';
import { createRandomOperation, Operation } from '@/homeworks/ts1/3_write';
import { Modal } from '@/components/Modal/Modal';
import { OperationInputs } from '@/components/Forms/Operation/types';
import { Operation as OperationForm } from '../../components/Forms/Operation/Operation';
import { useTranslation } from 'react-i18next';
import { faker } from '@faker-js/faker';
import cn from 'clsx';
import './OperationsList.sass';
import { Button } from '@/components/Forms/Common/Button/Button';
import { ButtonScales, ButtonVariant } from '@/components/Forms/Common/Button/types';

export const OperationsList: FC = () => {
  const [operations, setOperations] = useState<Operation[]>([
    createRandomOperation(new Date().toUTCString()),
    createRandomOperation(new Date().toUTCString()),
    createRandomOperation(new Date().toUTCString()),
    createRandomOperation(new Date().toUTCString()),
    createRandomOperation(new Date().toUTCString()),
  ]);
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentOperation, setCurrentOperation] = useState<Operation>(null);

  const addOperation = (data: OperationInputs): Operation => {
    const operation: Operation = {
      id: faker.string.uuid(),
      name: data.name,
      desc: data.desc,
      amount: data.sum,
      createdAt: new Date().toUTCString(),
      type: data.sum > 0 ? 'Profit' : 'Cost',
      category: {
        id: faker.string.uuid(),
        name: data.category,
      },
    };

    setOperations((prevState: Operation[]) => [...prevState, operation]);
    closeModal();

    return operation;
  };

  const editOperation = (data: OperationInputs): Operation => {
    const operation: Operation = currentOperation;

    operation.name = data.name;
    operation.desc = data.desc;
    operation.amount = data.sum;
    operation.type = data.sum > 0 ? 'Profit' : 'Cost';
    operation.category.name = data.category;

    const index: number = operations.findIndex((operation) => operation.id == currentOperation.id);

    setOperations((prevState: Operation[]) => [...prevState.slice(0, index), operation, ...prevState.slice(index + 1)]);
    closeModal();

    return operation;
  };

  const closeModal = (): void => {
    setCurrentOperation(null);
    setShowModal(false);
  };

  const onEdit = (e: React.MouseEvent<HTMLElement>): void => {
    const operationId = e.currentTarget.dataset['id'];
    const operation: Operation = operations
      .filter((operation) => {
        return operation.id == operationId;
      })
      .shift();

    setCurrentOperation(operation);
    setShowModal(true);
  };

  return (
    <>
      <Modal visible={showModal} closeHandler={closeModal} title={t('forms.operation.title')}>
        <OperationForm operation={currentOperation} submitHandler={currentOperation ? editOperation : addOperation} />
      </Modal>
      <div className={cn('button-container')}>
        <Button variant={ButtonVariant.primary} scale={ButtonScales.medium} onClick={() => setShowModal(true)}>
          {t('forms.operation.create')}
        </Button>
      </div>
      <List operations={operations} onEdit={onEdit}></List>
    </>
  );
};
