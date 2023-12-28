import React, { FC, memo } from 'react';
import './Auth.sass';
import cn from 'clsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthInputs, AuthType } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormField } from '../Common/FormField/FormField';

interface AuthProps {
  type: AuthType;
}

const validationSchema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(7),
  })
  .required();

export const Auth: FC = memo<AuthProps>(({ type }: AuthProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<AuthInputs> = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cn('field-container')}>
          <FormField type={'text'} label={'email'} name={'email'} register={register('email')} errors={errors.email} />
        </div>
        <div className={cn('field-container')}>
          <FormField
            type={'password'}
            label={'password'}
            name={'password'}
            register={register('password')}
            errors={errors.password}
          />
        </div>
        <div>
          <button type={'submit'}>{type == AuthType.signIn ? 'Sign In' : 'Sign Up'}</button>
        </div>
      </form>
    </div>
  );
});

Auth.displayName = 'Auth';
