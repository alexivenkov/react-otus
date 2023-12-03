import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ChangeProfileInputs } from './../types';
import { FormField } from '../../Common/FormField/FormField';
import { useTranslation } from 'react-i18next';

const validationSchema = yup.object({
  nickname: yup.string().required(),
  about: yup.string(),
});

export const ChangeProfile: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangeProfileInputs>({
    resolver: yupResolver(validationSchema),
  });
  const { t } = useTranslation();

  const onSubmit: SubmitHandler<ChangeProfileInputs> = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <strong>Change profile</strong>
        </p>
        <div>
          <FormField
            type={'text'}
            name={'nickname'}
            label={t('forms.profile.nickname')}
            register={register('nickname')}
            errors={errors.nickname}
          />
        </div>
        <div>
          <FormField
            type={'text'}
            name={'about'}
            label={t('forms.profile.about')}
            register={register('about')}
            errors={errors.about}
          />
        </div>
        <div>
          <button type={'submit'}>{t('forms.profile.save')}</button>
        </div>
      </form>
    </div>
  );
};