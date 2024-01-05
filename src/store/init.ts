import { createSlice } from '@reduxjs/toolkit';
import { State } from '@/store/index';

const initSlice = createSlice({
  name: 'init',
  initialState: false,
  reducers: {
    init: () => true,
  },
});
export const initActions = initSlice.actions;

export const initSelectors = {
  get: (state: State): State['init'] => {
    return state.init;
  },
};

export const init = initSlice.reducer;
