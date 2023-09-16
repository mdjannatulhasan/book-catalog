import { IBook } from '@/types/homeType';
import { createSlice } from '@reduxjs/toolkit';

interface IBookState {
    status: boolean;
    priceRange: number;
    books: IBook[];
    myBooks: IBook[];
    singleBook: IBook | null;
    loading: boolean;
    reviews: string[];
    isLoading: boolean;
    count: number;
}

const initialState: IBookState = {
    status: false,
    priceRange: 0,
    books: [],
    myBooks: [],
    singleBook: null,
    loading: false,
    reviews: [],
    isLoading: false,
    count: 0,
};

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        toggleState: (state) => {
            state.status = !state.status;
        },
        setSingleBook: (state, action) => {
            state.singleBook = action.payload?.data;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setReview: (state, action) => {
            state.reviews = action.payload?.data;
        },
        setBooks: (state, action) => {
            state.books = action.payload?.data;
            state.count = action.payload?.meta?.total;
        },
        setMyBooks: (state, action) => {
            state.myBooks = action.payload?.data;
            state.count = action.payload?.meta?.total;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const {
    toggleState,
    setSingleBook,
    setLoading,
    setReview,
    setBooks,
    setIsLoading,
    setMyBooks,
} = bookSlice.actions;

export default bookSlice.reducer;
