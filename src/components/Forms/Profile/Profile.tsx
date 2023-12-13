import React, { FC } from 'react';
import { ChangeProfile } from './ChangeProfile/ChangeProfile';
import { ChangePassword } from './ChangePassword/ChangePassword';
import './Profile.sass';

export const Profile: FC = () => {
  return (
    <div>
      <div>
        <ChangeProfile />
      </div>
      <hr className={'divider'} />
      <div>
        <ChangePassword />
      </div>
    </div>
  );
};
