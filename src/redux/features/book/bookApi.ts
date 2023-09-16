import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createBook: builder.mutation({
            query: ({ data }) => ({
                headers: {
                    Authorization: `${localStorage.getItem('token')}`,
                },
                url: `/books`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['books', 'my-books'],
        }),
        updateBook: builder.mutation({
            query: ({ data, id }) => ({
                headers: {
                    Authorization: `${localStorage.getItem('token')}`,
                },
                url: `/books/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['book', 'books', 'my-books'],
        }),
        getBooks: builder.query({
            query: (args) => {
                return {
                    headers: {
                        Authorization: `${localStorage.getItem('token')}`,
                    },
                    url: '/books',
                    params: {
                        limit: 1000,
                        searchTerm: args?.searchTerm && args?.searchTerm,
                        genre: args?.genre && args?.genre,
                        year: args?.year && args?.year,
                    },
                };
            },
            providesTags: ['books'],
        }),
        getMyBooks: builder.query({
            query: (args) => {
                return {
                    headers: {
                        Authorization: `${localStorage.getItem('token')}`,
                    },
                    url: '/books/my-books',
                    params: {
                        limit: 1000,
                        searchTerm: args?.searchTerm && args?.searchTerm,
                        genre: args?.genre && args?.genre,
                        year: args?.year && args?.year,
                    },
                };
            },
            providesTags: ['my-books'],
        }),
        getSingleBook: builder.query({
            query: (id) => `/books/${id}`,
            providesTags: ['book'],
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['books', 'my-books'],
        }),
        getReviews: builder.query({
            query: (id) => `/reviews/${id}`,
            providesTags: ['reviews'],
        }),
        setReviews: builder.mutation({
            query: ({ data }) => ({
                headers: {
                    Authorization: `${localStorage.getItem('token')}`,
                },
                url: `/reviews`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['reviews'],
        }),
    }),
});

export const {
    useCreateBookMutation,
    useGetBooksQuery,
    useGetSingleBookQuery,
    useUpdateBookMutation,
    useDeleteBookMutation,
    useGetReviewsQuery,
    useSetReviewsMutation,
    useGetMyBooksQuery,
} = bookApi;
