import React, { FC } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { ErrorField } from '@/components/Forms/Common/ErrorField/ErrorField';
import './SelectField.sass';
import cn from 'clsx';

interface SelectFieldProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: {
    name: string;
    value: string;
    selected: boolean;
  }[];
  register: UseFormRegisterReturn<string>;
  errors: FieldError;
}

export const SelectField: FC<SelectFieldProps> = (props: SelectFieldProps) => {
  return (
    <div className={cn('select-container')}>
      <label htmlFor={props.name}>{props.label}</label>
      <select {...props.register} {...props}>
        {props.options.map((option) => (
          <option key={option.value} defaultValue={option.value} selected={option.selected}>
            {option.name}
          </option>
        ))}
      </select>
      <ErrorField error={props.errors} />
    </div>
  );
};
