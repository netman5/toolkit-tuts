import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

const initialState = {
    cartItems: cartItems,
    total: 0,
    amount: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    // reducers: {}
});

// console.log(cartSlice);

export default cartSlice.reducer;