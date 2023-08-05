import { IBook } from '@/types/homeType';
import { createSlice } from '@reduxjs/toolkit';

interface IBookState {
    status: boolean;
    priceRange: number;
    books: IBook[];
    singleBook: IBook | null;
    loading: boolean;
    reviews: string[];
}

const initialState: IBookState = {
    status: false,
    priceRange: 0,
    books: [
        {
            code: '01',
            title: 'The Lord of the Rings: The Fellowship of the Ring',
            coverImage:
                'https://i.ibb.co/8sHXH7s/fellowship-of-the-ring-illustration-johan-egerkrans.jpg',
            price: 15.99,
            author: 'J.R.R. Tolkien',
            genre: 'Fantasy',
            publicationDate: 'July 29, 1954',
        },
        {
            title: 'The Lord of the Rings: The Two Towers',
            coverImage:
                'https://i.ibb.co/pj1VmCK/two-towers-illustration-johan-egerkrans.jpg',
            price: 14.99,
            author: 'J.R.R. Tolkien',
            genre: 'Adventure',
            publicationDate: 'November 11, 1954',
        },
        {
            title: 'The Lord of the Rings: The Return of the King',
            coverImage:
                'https://i.ibb.co/Jxdc2P1/return-of-the-king-illustration-johan-egerkrans.jpg',
            price: 16.99,
            author: 'J.R.R. Tolkien',
            genre: 'Fantasy',
            publicationDate: 'October 20, 1955',
        },
        {
            title: "Harry Potter and the Sorcerer's Stone",
            coverImage: 'https://i.ibb.co/dfrPkJM/2359.webp',
            price: 12.99,
            author: 'J.K. Rowling',
            genre: 'Fantasy',
            publicationDate: 'June 26, 1997',
        },
        {
            title: 'Harry Potter and the Chamber of Secrets',
            coverImage:
                'https://i.ibb.co/qxtdhVR/Harry-Potter-Book-Covers-Chamber-of-Secrets-us-1-682x1024.png',
            price: 13.99,
            author: 'J.K. Rowling',
            genre: 'Fantasy',
            publicationDate: 'July 2, 1998',
        },
        {
            title: 'Harry Potter and the Prisoner of Azkaban',
            coverImage: 'https://i.ibb.co/2S2Jkkn/2359-1.webp',
            price: 14.99,
            author: 'J.K. Rowling',
            genre: 'Adventure',
            publicationDate: 'July 8, 1999',
        },
        {
            title: 'Harry Potter and the Goblet of Fire',
            coverImage:
                'https://i.ibb.co/MMFKrWk/goblet-of-fire-ebook-cover.jpg',
            price: 15.99,
            author: 'J.K. Rowling',
            genre: 'Fantasy',
            publicationDate: 'July 8, 2000',
        },
        {
            title: 'Harry Potter and the Order of the Phoenix',
            coverImage: 'https://i.ibb.co/DtSmVNR/1660.webp',
            price: 16.99,
            author: 'J.K. Rowling',
            genre: 'Fantasy',
            publicationDate: 'June 21, 2003',
        },
        {
            title: 'Harry Potter and the Half-Blood Prince',
            coverImage: 'https://i.ibb.co/R2Dn1Wz/2359-2.webp',
            price: 17.99,
            author: 'J.K. Rowling',
            genre: 'Thriller',
            publicationDate: 'July 16, 2005',
        },
        {
            title: 'Harry Potter and the Deathly Hallows',
            coverImage: 'https://i.ibb.co/JsBHMQx/harry-potter-7.jpg',
            price: 18.99,
            author: 'J.K. Rowling',
            genre: 'Fantasy',
            publicationDate: 'July 21, 2007',
        },
        {
            title: 'To Kill a Mockingbird',
            coverImage: '',
            price: 11.99,
            author: 'Harper Lee',
            genre: 'Classic',
            publicationDate: 'July 11, 1960',
        },
        {
            title: '1984',
            coverImage: '',
            price: 10.99,
            author: 'George Orwell',
            genre: 'Dystopian',
            publicationDate: 'June 8, 1949',
        },
        {
            title: 'The Great Gatsby',
            coverImage: '',
            price: 12.99,
            author: 'F. Scott Fitzgerald',
            genre: 'Literary Fiction',
            publicationDate: 'April 10, 1925',
        },
        {
            title: 'Pride and Prejudice',
            coverImage: '',
            price: 9.99,
            author: 'Jane Austen',
            genre: 'Romance',
            publicationDate: 'January 28, 1813',
        },
        {
            title: 'The Martian',
            coverImage: '',
            price: 14.99,
            author: 'Andy Weir',
            genre: 'Science Fiction',
            publicationDate: 'February 11, 2014',
        },
        {
            title: 'Gone Girl',
            coverImage: '',
            price: 13.99,
            author: 'Gillian Flynn',
            genre: 'Mystery',
            publicationDate: 'May 24, 2012',
        },
        {
            title: 'Educated',
            coverImage: '',
            price: 16.99,
            author: 'Tara Westover',
            genre: 'Memoir',
            publicationDate: 'February 20, 2018',
        },
        {
            title: 'The Night Circus',
            coverImage: '',
            price: 15.99,
            author: 'Erin Morgenstern',
            genre: 'Fantasy',
            publicationDate: 'September 13, 2011',
        },
        {
            title: 'The Girl with the Dragon Tattoo',
            coverImage: '',
            price: 11.99,
            author: 'Stieg Larsson',
            genre: 'Thriller',
            publicationDate: 'August 16, 2005',
        },
        {
            title: 'The Alchemist',
            coverImage: '',
            price: 9.99,
            author: 'Paulo Coelho',
            genre: 'Philosophical Fiction',
            publicationDate: '1988',
        },
        {
            title: 'The Da Vinci Code',
            coverImage: '',
            price: 12.99,
            author: 'Dan Brown',
            genre: 'Mystery',
            publicationDate: 'March 18, 2003',
        },
    ],
    singleBook: null,
    loading: false,
    reviews: [],
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
    },
});

export const { toggleState, setSingleBook, setLoading, setReview } =
    bookSlice.actions;

export default bookSlice.reducer;