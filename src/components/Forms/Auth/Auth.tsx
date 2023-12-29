import React, { FC, memo } from 'react';
import './Auth.sass';
import cn from 'clsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthInputs, AuthType } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormField } from '../Common/FormField/FormField';
import { Button } from '@/components/Forms/Common/Button/Button';
import { ButtonScales, ButtonVariant } from '@/components/Forms/Common/Button/types';
import { useTranslation } from 'react-i18next';
import { tokenActions } from '@/store/token';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface AuthProps {
  type: AuthType;
  onSubmit?: (data: AuthInputs) => void;
}

const validationSchema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(7),
  })
  .required();

export const Auth: FC<AuthProps> = memo<AuthProps>((props: AuthProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>({
    resolver: yupResolver(validationSchema),
  });

  const { t } = useTranslation();
  const onSubmit: SubmitHandler<AuthInputs> = props.onSubmit ? props.onSubmit : console.log;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cn('field-container')}>
          <FormField
            type={'text'}
            label={t('forms.auth.email')}
            name={'email'}
            register={register('email')}
            errors={errors.email}
          />
        </div>
        <div className={cn('field-container')}>
          <FormField
            type={'password'}
            label={t('forms.auth.password')}
            name={'password'}
            register={register('password')}
            errors={errors.password}
          />
        </div>
        <div>
          <Button variant={ButtonVariant.secondary} scale={ButtonScales.medium}>
            {props.type == AuthType.signIn ? t('forms.auth.signIn') : t('forms.auth.singUp')}
          </Button>
        </div>
      </form>
    </div>
  );
});

Auth.displayName = 'Auth';
