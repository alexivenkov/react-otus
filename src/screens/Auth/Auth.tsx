import React, { FC } from 'react';
import { Auth as AuthForm } from '@/components/Forms/Auth/Auth';
import { AuthInputs, AuthType } from '@/components/Forms/Auth/types';
import './Auth.sass';
import cn from 'clsx';
import { useDispatch } from 'react-redux';
import { tokenActions } from '@/store/token';
import { useNavigate } from 'react-router-dom';
import { profileActions } from '@/store/profile';
import { faker } from '@faker-js/faker';

export const Auth: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: AuthInputs) => {
    dispatch(tokenActions.gen());
    dispatch(
      profileActions.set({
        nickname: faker.person.firstName(),
        about: faker.person.bio(),
      })
    );
    dispatch(profileActions.setIsAdmin(faker.datatype.boolean()));
    navigate('/profile');
  };

  return (
    <div className={cn('auth-wrapper')}>
      <AuthForm type={AuthType.signIn} onSubmit={onSubmit} />
    </div>
  );
};
