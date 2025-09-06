import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[],
    },
    reducers:{
        addItems: (state, action) => {
            const item = action.payload;
            const existing = state.items.find(i => i.id === item.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
        },
        incrementItem: (state, action) => {
            const id = action.payload;
            const item = state.items.find(i => i.id === id);
            if (item) item.quantity += 1;
        },
        decrementItem: (state, action) => {
            const id = action.payload;
            const item = state.items.find(i => i.id === id);
            if (item) {
                item.quantity -= 1;
                if (item.quantity <= 0) {
                    state.items = state.items.filter(i => i.id !== id);
                }
            }
        },
        removeItem: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(i => i.id !== id);
        },
        clearItems: (state) => {
            state.items = [];
        }
    }
})

export default cartSlice.reducer;

export const { addItems, incrementItem, decrementItem, removeItem, clearItems } = cartSlice.actions;