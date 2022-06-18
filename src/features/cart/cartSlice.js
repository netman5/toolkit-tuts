import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

const initialState = {
    cartItems: cartItems,
    total: 0,
    amount: 1,
    isLoading: true,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    // reducers: {}
});

export default cartSlice.reducer;