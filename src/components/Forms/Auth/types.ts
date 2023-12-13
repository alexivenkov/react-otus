import { InputHTMLAttributes } from 'react';

export interface AuthInputs extends InputHTMLAttributes<HTMLInputElement> {
  email: string;
  password: string;
}

export enum AuthType {
  signIn,
  signUp,
}
