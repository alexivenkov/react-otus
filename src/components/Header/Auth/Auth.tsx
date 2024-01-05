import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { tokenActions, tokenSelectors } from '@/store/token';
import { Button } from '@/components/Forms/Common/Button/Button';
import { ButtonScales, ButtonVariant } from '@/components/Forms/Common/Button/types';
import cn from 'clsx';
import './Auth.sass';
import { profileActions } from '@/store/profile';

export const Auth: FC = () => {
  const token = useSelector(tokenSelectors.get);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(tokenActions.clear());
    dispatch(profileActions.clear());
    navigate('/');
  };

  return (
    <div className={cn('auth-container')}>
      <Link to={'/auth'}>{!token && <span>Log In</span>}</Link>
      {token && (
        <Button variant={ButtonVariant.secondary} scale={ButtonScales.small} onClick={() => logOut()}>
          Log out
        </Button>
      )}
    </div>
  );
};
