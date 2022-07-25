import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  itemsList: [],
  totalQty: 0,
  subTotal: 1,
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

   addToCart: (state, action) => {
    const newItem = action.payload;
    const existingItems = state.itemsList.find((item) => item.id === newItem.id);

    if (existingItems) {
      existingItems.quantity++
      existingItems.totalPrice = Number(existingItems.quantity) * Number(newItem.price)
    } else {
      state.itemsList.push({
        type: newItem.type,
        id: newItem.id,
        price: Number(newItem.price),
        totalPrice: Number(newItem.price),
        img: newItem.img,
        quantity: 1,
      })
      state.totalQty++;
    }

   },

   subtotalPrice: (state, action) => {
    const newItem = action.payload;
      const existingItems = state.itemsList.find((item) => item.id === newItem.id);
      if (existingItems) {
      existingItems.quantity = Number(newItem.qty)
      existingItems.totalPrice = existingItems.price * Number(newItem.qty)
   }
  },
  removeCart: (state, action) => {
    const id = action.payload;
    const existingItems = state.itemsList.find((item) => item.id === id);
    if (existingItems)
    state.itemsList = state.itemsList.filter((item) => item.id !== id);
    state.totalQty--;
 },

}
});

export const { addToCart, subtotalPrice, removeCart } = cartSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.cart.value)`
// export const selectCount = (state) => state.cart.value;


export default cartSlice.reducer;
