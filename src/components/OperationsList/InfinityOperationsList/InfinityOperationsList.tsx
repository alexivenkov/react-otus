import React, { FC, useEffect, useState } from 'react';
import { Operation, createRandomOperation } from '@/homeworks/ts1/3_write';
import { OperationsList } from '../OperationsList';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const timeout = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const InfinityOperationsList: FC = () => {
  const [operations, setOperations] = useState<Operation[]>([
    createRandomOperation(new Date().toUTCString()),
    createRandomOperation(new Date().toUTCString()),
    createRandomOperation(new Date().toUTCString()),
  ]);

  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect((): void => {
    (async (): Promise<void> => {
      if (inView) {
        await timeout(500);
        setOperations((prevState: Operation[]) => [...prevState, createRandomOperation(new Date().toUTCString())]);
      }
    })();
  }, [inView, operations.length]);

  return (
    <div>
      <OperationsList operations={operations} />
      <span ref={ref}>{t('loading')}...</span>
    </div>
  );
};
