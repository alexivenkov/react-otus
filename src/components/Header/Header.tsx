import React, { FC, useContext } from 'react';
import { Logo } from '../Logo/Logo';
import './Header.sass';
import cn from 'clsx';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { AppContext, Context } from '@/App';
import { LocaleSwitcher } from '../LocaleSwitcher/LocaleSwitcher';
import { Menu } from '@/components/Header/Menu/Menu';
import { Auth } from '@/components/Header/Auth/Auth';

export const Header: FC = () => {
  const context: AppContext = useContext<AppContext>(Context);
  const theme = `header-${context?.theme ?? 'light'}`;

  return (
    <div className={cn('header-container')}>
      <header className={cn('header', `${theme}`)}>
        <div className={cn('header-content')}>
          <nav className={cn('nav-panel')}>
            <div className={cn('logo-container')}>
              <Logo />
            </div>
            <Menu />
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
            <Auth />
          </nav>
        </div>
      </header>
    </div>
  );
};
