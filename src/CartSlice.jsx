import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // list of items added to cart
  },
  reducers: {
    addItem: (state, action) => {
      // Add the new product to the cart array
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      // Remove product based on name
      state.items = state.items.filter(
        (item) => item.name !== action.payload.name
      );
    },

    updateQuantity: (state, action) => {
      // Update quantity of item (if your project uses quantity)
      const { name, quantity } = action.payload;

      const item = state.items.find((item) => item.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;