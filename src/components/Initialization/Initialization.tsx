import React, { FC } from 'react';
import './Initialization.sass';
import cn from 'clsx';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { initActions } from '@/store/init';

export const Initialization: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  setTimeout(() => {
    dispatch(initActions.init());
  }, 1000);

  navigate('/');

  return (
    <div className={cn('initialization')}>
      <h1>Initialization</h1>
    </div>
  );
};
