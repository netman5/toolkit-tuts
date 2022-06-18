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
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter(item => item.id !== itemId)
        }
    }
});

// console.log(cartSlice);
export const {clearCart, removeItem} = cartSlice.actions;

export default cartSlice.reducer;