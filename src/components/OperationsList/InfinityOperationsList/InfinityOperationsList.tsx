import React, { FC, useEffect, useState } from 'react';
import { Operation, createRandomOperation } from '../../../homeworks/ts1/3_write';
import { OperationsList } from '../OperationsList';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

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

  return (
    <div>
      <OperationsList operations={operations} infinityParams={{ timeout: 500, inView: inView }} />
      <span ref={ref}>{t('loading')}...</span>
    </div>
  );
};