import React, { FC } from 'react';
import { Profile as ProfileForm } from '@/components/Forms/Profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { Profile as ProfileType, profileActions, profileSelectors } from '@/store/profile';
import cn from 'clsx';
import './Profile.sass';
import { ChangeProfileInputs } from '@/components/Forms/Profile/types';

export const Profile: FC = () => {
  const profile: ProfileType = useSelector(profileSelectors.get);
  const dispatch = useDispatch();

  const onSubmit = (data: ChangeProfileInputs): void => {
    dispatch(
      profileActions.set({
        nickname: data.nickname,
        about: data.about,
      })
    );
  };

  return (
    <div className={cn('profile')}>
      <ProfileForm nickname={profile?.nickname} about={profile?.about} onChangeProfile={onSubmit} />
    </div>
  );
};
