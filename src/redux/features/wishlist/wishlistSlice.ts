import { IReadingStatus } from '@/types/globalTypes';
import { IBookWithId } from '@/types/homeType';
import { createSlice } from '@reduxjs/toolkit';

interface IWishlistState {
    status: boolean;
    wishlist: IBookWithId[];
    futureReads: IBookWithId[];
    readingNow: IBookWithId[];
    finishedReading: IBookWithId[];
    loading: boolean;
}
interface IOtherList {
    status: IReadingStatus;
    bookId: IBookWithId;
}

const initialState: IWishlistState = {
    status: false,
    wishlist: [],
    futureReads: [],
    readingNow: [],
    finishedReading: [],
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
        setReadinglist: (state, action) => {
            state.readingNow = [];
            state.futureReads = [];
            state.finishedReading = [];
            action.payload?.data[0]?.otherList.map((item: IOtherList) => {
                if (item.status === 'READING') {
                    state.readingNow = [...state.readingNow, item.bookId];
                } else if (item.status === 'READ_IN_FUTURE') {
                    state.futureReads = [...state.futureReads, item.bookId];
                } else {
                    state.finishedReading = [
                        ...state.finishedReading,
                        item.bookId,
                    ];
                }
            });
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        removeWishlist: (state) => {
            state.wishlist = [];
        },
    },
});

export const {
    toggleState,
    setWishlist,
    setLoading,
    removeWishlist,
    setReadinglist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
