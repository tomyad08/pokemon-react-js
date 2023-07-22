import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    identitas: [],
    pokemons: 0,
    attempts: 0,
    coin: 500,
    pokeball: 0,
    greatball: 0,
    masterball: 0,
  },
  reducers: {
    addProducts: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    addIdentitas: (state, action) => {
      state.identitas.push(action.payload);
    },
    deleteIdentitas: (state, action) => {
      state.identitas = [];
    },
    addPokemons: (state, action) => {
      state.pokemons += action.payload;
    },
    addAttemps: (state, action) => {
      state.attempts += action.payload;
    },
    addCoin: (state, action) => {
      state.coin += action.payload;
    },
    addPokeball: (state, action) => {
      state.pokeball += action.payload;
    },
    addGreatball: (state, action) => {
      state.greatball += action.payload;
    },
    addMasterball: (state, action) => {
      state.masterball += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProducts,
  deleteProduct,
  addPokemons,
  addAttemps,
  addCoin,
  addGreatball,
  addIdentitas,
  addMasterball,
  addPokeball,
  deleteIdentitas,
} = productSlice.actions;

export default productSlice.reducer;
