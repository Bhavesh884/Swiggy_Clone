import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.totalPrice += Math.ceil(action.payload?.card?.info?.price / 100);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.items.splice(index, 1);
        const tempPrice = Math.ceil(
          state.items[index]?.card?.info?.price / 100
        );
        state.totalPrice -= tempPrice;
        if (state.items.length <= 0) {
          state.totalPrice = 0;
        }
      }
    },
  },
});
export default cartSlice.reducer;
export const { addItem, clearCart, removeItem } = cartSlice.actions;
