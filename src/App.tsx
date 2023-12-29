import React, { createContext, SetStateAction, useState } from 'react';
import './styles/index.sass';
import './localization';
import { Localization } from './localization/Localization';
import { Navigation } from './navigation/Navigation';
import { Provider, useSelector } from 'react-redux';
import { store } from '@/store/';
import { initSelectors } from '@/store/init';

type Theme = 'light' | 'dark';
type Locale = 'en' | 'ru';

export interface AppContext {
  theme: Theme;
  locale: Locale;
  themeSetter: React.Dispatch<SetStateAction<string>>;
  localeSetter: React.Dispatch<SetStateAction<string>>;
}

export const Context = createContext<AppContext>(null);

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [locale, setLocale] = useState<Locale>('en');

  return (
    <Provider store={store}>
      <Context.Provider value={{ theme: theme, locale: locale, themeSetter: setTheme, localeSetter: setLocale }}>
        <Localization />
        <Navigation />
      </Context.Provider>
    </Provider>
  );
}

export default App;
