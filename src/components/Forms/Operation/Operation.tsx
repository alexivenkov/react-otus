import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { OperationFormTypes, OperationInputs } from './types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormField } from '../Common/FormField/FormField';
import { Button } from '../Common/Button/Button';
import { Operation as OperationType, OperationTypes } from '@/homeworks/ts1/3_write';
import { ButtonScales, ButtonVariant } from '../Common/Button/types';
import './Operation.sass';
import * as yup from 'yup';
import { SelectField } from '@/components/Forms/Common/SelectField/SelectField';

interface OperationProps {
  operation?: OperationType;
  submitHandler?: (data: OperationInputs) => OperationType;
}

const validationSchema = yup.object({
  name: yup.string().required(),
  category: yup.string().required(),
  sum: yup
    .number()
    .required()
    .when('operationType', {
      is: OperationTypes.Cost,
      then: (schema) => schema.negative(),
      otherwise: (schema) => schema.moreThan(-1),
    }),
  desc: yup.string(),
  operationType: yup.string().required(),
});

export const Operation: FC<OperationProps> = ({ operation, submitHandler }: OperationProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OperationInputs>({
    resolver: yupResolver(validationSchema),
  });
  const { t } = useTranslation();
  const type = operation ? OperationFormTypes.update : OperationFormTypes.create;
  const onSubmit: SubmitHandler<OperationInputs> = (data: OperationInputs) => {
    if (submitHandler) {
      submitHandler(data);
    }

    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <strong>{t(`forms.operation.${type}`)}</strong>
        </p>
        <div>
          <SelectField
            name={'operationType'}
            label={t('forms.operation.type')}
            options={[
              {
                name: t('forms.operation.profit'),
                value: OperationTypes.Profit,
                selected: operation?.type === OperationTypes.Profit,
              },
              {
                name: t('forms.operation.cost'),
                value: OperationTypes.Cost,
                selected: operation?.type === OperationTypes.Cost,
              },
            ]}
            register={register('operationType')}
            errors={errors.operationType}
          />
        </div>
        <div>
          <FormField
            type={'text'}
            name={'name'}
            defaultValue={operation?.name}
            label={t('forms.operation.name')}
            register={register('name')}
            errors={errors.name}
          />
        </div>
        <div>
          <FormField
            type={'text'}
            name={'category'}
            defaultValue={operation?.category?.name}
            label={t('forms.operation.category')}
            register={register('category')}
            errors={errors.category}
          />
        </div>
        <div>
          <FormField
            type={'text'}
            name={'sum'}
            defaultValue={operation?.amount}
            label={t('forms.operation.sum')}
            register={register('sum')}
            errors={errors.sum}
          />
        </div>
        <div>
          <FormField
            type={'text'}
            name={'desc'}
            defaultValue={operation?.desc}
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
              defaultValue={operation.createdAt}
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
