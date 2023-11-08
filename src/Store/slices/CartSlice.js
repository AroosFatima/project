import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    Fav: [],

    search: "",
  },
  reducers: {
    add(state, action) {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (!existingProduct) {
        const newProduct = {
          ...action.payload,
          quantity: action.payload.quantity,
        };
        state.products.push(newProduct);
      }
    },
    addFav(state, action) {
      const item = state.Fav.find(
        (product) => product.id === action.payload.id
      );
      item ? state.Fav.splice(item, 1) : state.Fav.push(action.payload);
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    remove(state, action) {
      return {
        products: state.products.filter((item) => item.id !== action.payload),
      };
    },
  },
});
export const { add, remove, setSearch, addFav } = CartSlice.actions;
export default CartSlice.reducer;
