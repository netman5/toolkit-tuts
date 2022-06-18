import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
    cartItems: [],
    total: 0,
    amount: 0,
    isLoading: true,
}

export const getCartItems = createAsyncThunk('cart/getCartItems', async (args, thunkAPI) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  });

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
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },

        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        },

        [getCartItems.rejected]: (state, action) => {
            state.isLoading = false;
            console.log(action.payload);
        }
    }
});

export const {clearCart, removeItem, increase, decrease, calculateTotal} = cartSlice.actions;

export default cartSlice.reducer;