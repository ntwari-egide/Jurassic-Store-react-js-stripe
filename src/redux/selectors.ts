import { createSelector } from "@reduxjs/toolkit";

const cartSelector = (state: any) => state.cart;

export const cartTotalSelector = createSelector([cartSelector], (cart) =>
  cart.reduce((total: any, current: any) => (total += current.quantity), 0)
);

export const cartTotalPriceSelector = createSelector([cartSelector], (cart) =>
  cart.reduce(
    (total: any, current: any) => (total += current.price * current.quantity),
    0
  )
);
