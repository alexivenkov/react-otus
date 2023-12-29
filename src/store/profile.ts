import { createSlice } from '@reduxjs/toolkit';
import { State } from '@/store/index';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Profile = {
  isAdmin: boolean;
  nickname?: string;
  about?: string;
};

const initialProfile: Profile = {
  isAdmin: false,
  nickname: null,
  about: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialProfile,
  reducers: {
    set: (state: Profile, action: PayloadAction<Omit<Profile, 'isAdmin'>>) => {
      state.nickname = action.payload.nickname;
      state.about = action.payload.about;
    },
    clear: () => initialProfile,
    setIsAdmin: (state: Profile, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    },
    setNickname: (state: Profile, action: PayloadAction<{ nickname: string }>) => {
      state.nickname = action.payload.nickname;
    },
    setAbout: (state: Profile, action: PayloadAction<{ about: string }>) => {
      state.about = action.payload.about;
    },
  },
});
export const profileActions = profileSlice.actions;

export const profileSelectors = {
  get: (state: State): State['profile'] => {
    return state.profile;
  },
};

export const profile = profileSlice.reducer;
