import { IBook, IBookWithId } from '@/types/homeType';
import { createSlice } from '@reduxjs/toolkit';

interface IWishlistState {
    status: boolean;
    wishlist: IBookWithId[];
    loading: boolean;
}

const initialState: IWishlistState = {
    status: false,
    wishlist: [],
    loading: false,
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        toggleState: (state) => {
            state.status = !state.status;
        },
        setWishlist: (state, action) => {
            state.wishlist = action.payload?.data[0]?.wishlist;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        removeWishlist: (state) => {
            state.wishlist = [];
        },
    },
});

export const { toggleState, setWishlist, setLoading, removeWishlist } =
    wishlistSlice.actions;

export default wishlistSlice.reducer;
