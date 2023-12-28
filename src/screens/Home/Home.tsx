import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('content')}</p>
    </div>
  );
};
