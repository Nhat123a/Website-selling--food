import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import FavoriteSlice from "./FavoriteSlice";
const store = configureStore({
  reducer: {
    cart: CartSlice,
    Favorite: FavoriteSlice,
  },
});
export default store;
