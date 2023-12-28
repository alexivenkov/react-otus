import React, { FC } from 'react';
import { OperationShort, OperationShortProps } from '../OperationShort';
import { Button } from '../../Forms/Common/Button/Button';
import { ButtonScales, ButtonVariant } from '../../Forms/Common/Button/types';
import { useTranslation } from 'react-i18next';
import cn from 'clsx';
import './OperationEditable.sass';

interface OperationEditableProps extends OperationShortProps {
  id: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export const OperationEditable: FC<OperationEditableProps> = (props: OperationEditableProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={cn('operation-wrapper')}>
        <OperationShort name={props.name} category={props.category} sum={props.sum} desc={props.desc}></OperationShort>
      </div>
      <div className={cn('edit-button-wrapper')}>
        <Button variant={ButtonVariant.primary} scale={ButtonScales.small} onClick={props.onClick} data-id={props.id}>
          {t('buttons.edit')}
        </Button>
      </div>
    </div>
  );
};
