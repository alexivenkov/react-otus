import React, { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ProfileInputs } from '../types';
import { ErrorField } from '../../Common/ErrorField/ErrorField';

interface AboutFieldProps {
  register: UseFormRegister<ProfileInputs>;
  errors: FieldErrors<ProfileInputs>;
}

export const AboutField: FC<AboutFieldProps> = (props: AboutFieldProps) => {
  return (
    <div>
      <label>About:</label>
      <input type={'text'} {...props.register('about', { required: true })} />
      <ErrorField error={props.errors.about} />
    </div>
  );
};
