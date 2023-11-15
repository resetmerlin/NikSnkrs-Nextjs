import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const orderSlice = createSlice({
  name: 'orders',
  initialState: initialState,
  reducers: {
    orderAdded(state, action) {
      if (state) {
        return Object.assign({}, state, action.payload);
      }
    },
    orderDeleted: () => initialState,
  },
});

export const { orderAdded, orderDeleted } = orderSlice.actions;
export const selectOrder = (state: any) => state.orders;

export default orderSlice.reducer;
