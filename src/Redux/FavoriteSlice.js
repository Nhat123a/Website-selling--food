import { createSlice } from "@reduxjs/toolkit";
const FavoriteSlice = createSlice({
  name: "Favorite",
  initialState: {
    Favorite: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const boolean = state.Favorite.find(
        (x) => x.productID === action.payload.productID
      );
      if (!boolean) {
        state.Favorite.push(action.payload);
      }
    },
    RemoveFavorite: (state, action) => {
      state.Favorite = state.Favorite.filter(
        (x) => x.productID !== action.payload.productID
      );
    },
  },
});
export const { addFavorite, RemoveFavorite } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
