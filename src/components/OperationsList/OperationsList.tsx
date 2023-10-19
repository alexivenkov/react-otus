import React, { FC } from 'react';
import { Operation } from '../../homeworks/ts1/3_write';
import { OperationShort } from '../OperationShort/OperationShort';

interface OperationsListProps {
  operations: Operation[];
}

export const OperationsList: FC<OperationsListProps> = ({ operations = [] }) => {
  return (
    <>
      {operations.length > 0 && (
        <ul>
          {operations.map((operation: Operation) => (
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
    </>
  );
};
