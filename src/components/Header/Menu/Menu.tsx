import React, { FC } from 'react';
import './Menu.sass';
import cn from 'clsx';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { tokenSelectors } from '@/store/token';

export const Menu: FC = () => {
  const { t } = useTranslation();
  const token = useSelector(tokenSelectors.get);

  return (
    <ul className={cn('menu-items')}>
      <li>
        <div className={cn('menu-item')}>
          <Link to={'/'}>
            <span>{t('header.menu.home')}</span>
          </Link>
        </div>
      </li>
      {token && (
        <>
          <li>
            <div className={cn('menu-item')}>
              <Link to={'/profile'}>
                <span>{t('header.menu.profile')}</span>
              </Link>
            </div>
          </li>
          <li>
            <div className={cn('menu-item')}>
              <Link to={'/operations'}>
                <span>{t('header.menu.operations')}</span>
              </Link>
            </div>
          </li>
        </>
      )}
    </ul>
  );
};
