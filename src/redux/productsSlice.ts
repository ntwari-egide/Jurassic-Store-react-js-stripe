import { AnyAction, createSlice } from "@reduxjs/toolkit";
import _products from "../data/products";
import store from "./store";

const initialState = { loading: false, list: [] };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    startFetch(state) {
      state.loading = true;
    },
    save(state, action) {
      const { payload } = action;
      state.loading = false;
      state.list = payload;
    }
  }
});

export const { startFetch, save } = productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  dispatch(save([]));
  dispatch(startFetch());

  const products = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(_products);
    }, 800);
  });

  dispatch(save(products));
};

const productsReducer = productsSlice.reducer;

export default productsReducer;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


