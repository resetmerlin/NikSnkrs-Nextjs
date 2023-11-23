import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    productAdded(state: any[], action) {
      const data = action.payload;

      state.push(data);
    },
  },
});

export const { productAdded } = productSlice.actions;
export const selectProducts = (state: any) => state.products;

export default productSlice.reducer;
