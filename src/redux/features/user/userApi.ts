import { api } from '@/redux/api/apiSlice';

const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: ({ data }) => ({
                url: `/auth/login`,
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useLoginUserMutation } = userApi;
