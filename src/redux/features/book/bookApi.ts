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
            invalidatesTags: ['books'],
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
            invalidatesTags: ['book', 'books'],
        }),
        getBooks: builder.query({
            query: () => '/books',
            providesTags: ['books'],
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
            invalidatesTags: ['books'],
        }),
    }),
});

export const {
    useCreateBookMutation,
    useGetBooksQuery,
    useGetSingleBookQuery,
    useUpdateBookMutation,
    useDeleteBookMutation,
} = bookApi;
