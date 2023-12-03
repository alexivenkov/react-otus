import React, { FC, useState, useEffect } from 'react';
import { Operation, createRandomOperation } from '../../homeworks/ts1/3_write';
import { OperationShort } from '../OperationShort/OperationShort';
import { InfinityOperationsListParams } from './types';
import { useInView } from 'react-intersection-observer';

interface OperationsListProps {
  operations: Operation[];
  infinityParams?: InfinityOperationsListParams;
}

const timeout = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const OperationsList: FC<OperationsListProps> = ({ operations = [], infinityParams }) => {
  const [list, setList] = useState<Operation[]>(operations);

  if (infinityParams) {
    /** add operations to list and re-render until bottom of the list is visible */
    useEffect((): void => {
      (async (): Promise<void> => {
        if (infinityParams.inView) {
          await timeout(500);
          setList((prevState: Operation[]) => [...prevState, createRandomOperation(new Date().toUTCString())]);
        }
      })();
    }, [infinityParams.inView, list.length]);
  }

  console.log(list.length);

  return (
    <div>
      {list.length > 0 && (
        <ul>
          {list.map((operation: Operation) => (
            <li key={operation.id}>
              <OperationShort
                name={operation.name}
                sum={operation.amount}
                category={operation.category.name}
                desc={operation.desc}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
