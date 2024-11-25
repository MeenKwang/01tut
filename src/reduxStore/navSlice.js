import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        { id: 1, label: 'Home', link: '/' },
        { id: 2, label: 'About', link: '/about' },
        { id: 3, label: 'Contact', link: '/contact' },
    ],
};

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        cloneItem: (state, action) => {
            const newItem = {
                ...action.payload,
                id: Date.now(), // Unique ID for the cloned item
                label: `${action.payload.label} (Copy)`,
            };
            state.items.push(newItem);
        },
    },
});

export const { cloneItem } = navSlice.actions;

export default navSlice.reducer;
