import React, { FC } from 'react';
import { Operation } from '@/homeworks/ts1/3_write';
import { OperationShort } from '../OperationShort/OperationShort';
import { OperationEditable } from '../OperationShort/OperationEditable/OperationEditable';

interface OperationsListProps {
  operations: Operation[];
  onEdit?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const OperationsList: FC<OperationsListProps> = ({ operations = [], onEdit }) => {
  return (
    <div>
      {operations.length > 0 && (
        <ul>
          {operations.map((operation: Operation) => (
            <li key={operation.id}>
              {onEdit ? (
                <OperationEditable
                  id={operation.id}
                  name={operation.name}
                  sum={operation.amount}
                  category={operation.category.name}
                  desc={operation.desc}
                  onClick={onEdit}
                />
              ) : (
                <OperationShort
                  name={operation.name}
                  category={operation.category.name}
                  sum={operation.amount}
                  desc={operation.desc}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
