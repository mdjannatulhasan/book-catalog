import { api } from '@/redux/api/apiSlice';

const wishlistApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createWishlist: builder.mutation({
            query: (code) => ({
                headers: {
                    Authorization: `${localStorage.getItem('token')}`,
                },
                url: `/wishlist/${code}`,
                method: 'POST',
            }),
            invalidatesTags: ['wishlist'],
        }),
        updateWishlist: builder.mutation({
            query: ({ data, id }) => ({
                headers: {
                    Authorization: `${localStorage.getItem('token')}`,
                },
                url: `/wishlist/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['wishlist'],
        }),
        updateReadinglist: builder.mutation({
            query: ({ data }) => ({
                headers: {
                    Authorization: `${localStorage.getItem('token')}`,
                },
                url: `/wishlist/list`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['wishlist'],
        }),
        getWishlists: builder.query({
            query: () => ({
                url: '/wishlist',
                headers: {
                    Authorization: `${localStorage.getItem('token')}`,
                },
            }),
            providesTags: ['wishlist'],
        }),
        getSingleWishlist: builder.query({
            query: (id) => `/wishlist/${id}`,
            providesTags: ['wishlist'],
        }),
        deleteWishlist: builder.mutation({
            query: (id) => ({
                url: `/wishlist/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['wishlist'],
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
    useCreateWishlistMutation,
    useGetWishlistsQuery,
    useGetSingleWishlistQuery,
    useUpdateWishlistMutation,
    useDeleteWishlistMutation,
    useGetReviewsQuery,
    useSetReviewsMutation,
    useUpdateReadinglistMutation,
} = wishlistApi;
