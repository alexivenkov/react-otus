import React, { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../Logo/Logo';
import './Header.sass';
import cn from 'clsx';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { AppContext, Context } from '@/App';
import { LocaleSwitcher } from '../LocaleSwitcher/LocaleSwitcher';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  const context: AppContext = useContext<AppContext>(Context);
  const theme = `header-${context?.theme ?? 'light'}`;
  const { t } = useTranslation();

  return (
    <div className={cn('header-container')}>
      <header className={cn('header', `${theme}`)}>
        <div className={cn('header-content')}>
          <nav className={cn('nav-panel')}>
            <div className={cn('logo-container')}>
              <Logo />
            </div>
            <ul className={cn('menu-items')}>
              <li>
                <div className={cn('menu-item')}>
                  <Link to={'/'}>
                    <span>{t('header.menu.home')}</span>
                  </Link>
                </div>
              </li>
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
            </ul>
            <div className={'switchers-container'}>
              <ul>
                <li>
                  <ThemeSwitcher />
                </li>
                <li>
                  <LocaleSwitcher />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};
