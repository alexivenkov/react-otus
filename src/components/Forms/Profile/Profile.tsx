import React, { FC } from 'react';
import { ChangeProfile } from './ChangeProfile/ChangeProfile';
import { ChangePassword } from './ChangePassword/ChangePassword';
import './Profile.sass';
import { ChangeProfileInputs } from '@/components/Forms/Profile/types';

interface ProfileProps {
  nickname?: string;
  about?: string;
  onChangeProfile?: (data: ChangeProfileInputs) => void;
}

export const Profile: FC<ProfileProps> = (props: ProfileProps) => {
  return (
    <div>
      <div>
        <ChangeProfile onSubmit={props.onChangeProfile} {...props} />
      </div>
      <hr className={'divider'} />
      <div>
        <ChangePassword />
      </div>
    </div>
  );
};
