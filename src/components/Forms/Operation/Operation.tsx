import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { OperationFormTypes, OperationInputs } from './types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormField } from '../Common/FormField/FormField';
import { Button } from '../Common/Button/Button';
import './Operation.sass';
import { Operation as OperationType } from '../../../../src/homeworks/ts1/3_write';
import * as yup from 'yup';
import { ButtonScales, ButtonVariant } from '../Common/Button/types';

interface OperationProps {
  operation: OperationType;
}

const validationSchema = yup.object({
  name: yup.string().required(),
  category: yup.string().required(),
  sum: yup.number().required(),
  desc: yup.string(),
});

export const Operation: FC<OperationProps> = ({ operation }: OperationProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OperationInputs>({
    resolver: yupResolver(validationSchema),
  });

  const { t } = useTranslation();
  const onSubmit: SubmitHandler<OperationInputs> = (data) => console.log(data);
  const type = operation ? OperationFormTypes.update : OperationFormTypes.create;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <strong>{t(`forms.operation.${type}`)}</strong>
        </p>
        <div>
          <FormField
            type={'text'}
            name={'name'}
            value={operation?.name}
            label={t('forms.operation.name')}
            register={register('name')}
            errors={errors.name}
          />
        </div>
        <div>
          <FormField
            type={'text'}
            name={'category'}
            value={operation?.category.name}
            label={t('forms.operation.category')}
            register={register('category')}
            errors={errors.category}
          />
        </div>
        <div>
          <FormField
            type={'text'}
            name={'sum'}
            value={operation?.amount}
            label={t('forms.operation.sum')}
            register={register('sum')}
            errors={errors.sum}
          />
        </div>
        <div>
          <FormField
            type={'text'}
            name={'desc'}
            value={operation?.desc}
            label={t('forms.operation.desc')}
            register={register('desc')}
            errors={errors.desc}
          />
        </div>
        {operation && (
          <div>
            <FormField
              type={'text'}
              name={'date'}
              value={operation.createdAt}
              label={t('forms.operation.date')}
              register={register('date')}
              errors={errors.date}
              disabled={true}
            />
          </div>
        )}
        <div>
          <Button variant={ButtonVariant.primary} scale={ButtonScales.small}>
            {t('forms.operation.save')}
          </Button>
        </div>
      </form>
    </div>
  );
};
