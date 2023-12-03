import React, { FC } from 'react';
import { ButtonScales, ButtonVariant } from './types';
import './Button.sass';
import cn from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  scale: ButtonScales;
}

export const Button: FC<ButtonProps> = (props) => {
  const { scale, variant } = props;
  const btnClass = `btn ${scale} ${variant}`;

  return (
    <button className={cn(btnClass)} {...props}>
      {props.children}
    </button>
  );
};
