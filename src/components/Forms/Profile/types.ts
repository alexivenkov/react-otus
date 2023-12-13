import { InputHTMLAttributes } from 'react';

export interface ChangeProfileInputs extends InputHTMLAttributes<HTMLInputElement> {
  nickname: string;
  about: string;
}

export interface ChangePasswordInputs extends InputHTMLAttributes<HTMLInputElement> {
  password: string;
  newpassword: string;
  repeatpassword: string;
}
