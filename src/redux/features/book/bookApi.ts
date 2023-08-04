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
        getBooks: builder.query({
            query: () => '/books',
            providesTags: ['books'],
        }),
        getSingleBook: builder.query({
            query: (id) => `/books/${id}`,
            providesTags: ['book'],
        }),
    }),
});

export const {
    useCreateBookMutation,
    useGetBooksQuery,
    useGetSingleBookQuery,
} = bookApi;
