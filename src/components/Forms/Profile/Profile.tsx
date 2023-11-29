import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NameField } from './NameField/NameField';
import { AboutField } from './AboutField/AboutField';
import { ProfileInputs } from './types';
import { AuthType } from 'src/components/Forms/Auth/types';

export const Profile: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileInputs>();

  const onSubmit: SubmitHandler<ProfileInputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <NameField register={register} errors={errors} />
      </div>
      <div>
        <AboutField register={register} errors={errors} />
      </div>
      <div>
        <button type={'submit'}>submit</button>
      </div>
    </form>
  );
};
