import React, { FC } from 'react';
import cn from 'clsx';
import './FormField.sass';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { ErrorField } from '../ErrorField/ErrorField';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  register: UseFormRegisterReturn<string>;
  errors: FieldError;
}

export const FormField: FC<FormFieldProps> = (props: FormFieldProps) => {
  return (
    <div className={cn('input-container')}>
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type} name={props.name} {...props.register} />
      <ErrorField error={props.errors} />
    </div>
  );
};
