import React, { FC, useEffect, useState } from 'react';
import { Operation, createRandomOperation } from '../../../homeworks/ts1/3_write';
import { OperationsList } from '../OperationsList';
import { useInView } from 'react-intersection-observer';

const timeout = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const InfinityOperationsList: FC = () => {
  const [operations, setOperations] = useState<Operation[]>([
    createRandomOperation(new Date().toUTCString()),
    createRandomOperation(new Date().toUTCString()),
    createRandomOperation(new Date().toUTCString()),
  ]);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  /** add operations to list and re-render until bottom of the list is visible */
  useEffect((): void => {
    (async (): Promise<void> => {
      if (inView) {
        await timeout(500);
        setOperations((prevState: Operation[]) => [...prevState, createRandomOperation(new Date().toUTCString())]);
      }
    })();
  }, [inView, operations.length]);

  console.log(operations.length);

  return (
    <div>
      <OperationsList operations={operations} />
      <span ref={ref}>Loading...</span>
    </div>
  );
};
