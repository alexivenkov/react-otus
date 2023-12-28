import React, { memo, useContext } from 'react';
import { Header } from '../Header/Header';
import './Layout.sass';
import cn from 'clsx';
import { AppContext, Context } from '@/App';

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = memo<LayoutProps>(({ children }) => {
  const context: AppContext = useContext<AppContext>(Context);
  const theme = `layout-${context?.theme ?? 'light'}`;

  return (
    <div className={cn('layout-container')}>
      <div className={cn('layout', `${theme}`)}>
        <Header />
        <div className={cn('layout-content')}>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
});
