import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createBook: builder.mutation({
            query: ({ data }) => ({
                url: `/book`,
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useCreateBookMutation } = bookApi;
