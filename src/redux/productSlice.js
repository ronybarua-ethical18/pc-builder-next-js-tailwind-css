import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pcBuilderComponents: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setPCBuildersComponents: (state, action) => {
      state.pcBuilderComponents = action.payload;
    },
  },
});

export const { setPCBuildersComponents } = productSlice.actions;

export default productSlice.reducer;
