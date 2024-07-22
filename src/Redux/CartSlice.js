import { createSlice } from "@reduxjs/toolkit";
const Cartslice = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      const existingproduct = state.cart.find(
        (x) => x.productID === action.payload.productID
      );
      const quantities = action.payload.quantity || 1;
      if (existingproduct) {
        existingproduct.quantity += 1;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: quantities,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.productID === action.payload.productID
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.productID === action.payload.productID
      );

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else {
        // Nếu số lượng <= 1 thì xóa sản phẩm ra khỏi giỏ hàng
        state.cart = state.cart.filter(
          (item) => item.productID !== action.payload.productID
        );
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.productID !== action.payload.productID
      );
    },
  },
});
export const { addtoCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  Cartslice.actions;
export default Cartslice.reducer;
