import { configureStore } from '@reduxjs/toolkit';
import { token } from '@/store/token';
import { init } from '@/store/init';
import { profile } from '@/store/profile';

export const store = configureStore({
  reducer: {
    token,
    init,
    profile,
  },
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
