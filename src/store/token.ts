import { createSlice } from '@reduxjs/toolkit';
import { State } from '@/store/index';

const tokenSlice = createSlice({
  name: 'token',
  initialState: '',
  reducers: {
    gen: () => Math.random().toString(16),
    clear: () => '',
  },
});
export const tokenActions = tokenSlice.actions;

export const tokenSelectors = {
  get: (state: State): State['token'] => {
    return state.token;
  },
};

export const token = tokenSlice.reducer;
