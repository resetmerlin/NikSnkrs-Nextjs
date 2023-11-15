import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: initialState,
  reducers: {
    userInfoAdded(state, action) {
      if (state) {
        return Object.assign({}, state, action.payload);
      }
    },
    userInfoDeleted: () => initialState,
  },
});

export const { userInfoAdded, userInfoDeleted } = userInfoSlice.actions;
export const selectUser = (state: any) => state.userInfo;

export default userInfoSlice.reducer;
