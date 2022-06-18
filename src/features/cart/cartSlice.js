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
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter(item => item.id !== itemId)
        },
        increase: (state, { payload }) => {
            // state.cartItems.find(item => item.id === payload.id).amount++
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            // cartItem.amount++
            cartItem.amount = cartItem.amount + 1
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1
        },
        calculateTotal: (state) => {
            let total = 0;
            let amount = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.price * item.amount;
            })
            state.total = total;
            state.amount = amount;
        }
    }
});

// console.log(cartSlice);
export const {clearCart, removeItem, increase, decrease, calculateTotal} = cartSlice.actions;

export default cartSlice.reducer;