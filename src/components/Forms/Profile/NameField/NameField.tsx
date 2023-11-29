import React, { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ProfileInputs } from '../types';
import { ErrorField } from '../../Common/ErrorField/ErrorField';

interface NameFieldProps {
  register: UseFormRegister<ProfileInputs>;
  errors: FieldErrors<ProfileInputs>;
}

export const NameField: FC<NameFieldProps> = (props: NameFieldProps) => {
  return (
    <div>
      <label>Name:</label>
      <input type={'text'} {...props.register('about', { required: true })} />
      <ErrorField error={props.errors.name} />
    </div>
  );
};
