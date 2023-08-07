import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    // baseUrl: 'https://book-catalog-server-smoky.vercel.app/api/v1',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001/api/v1' }),
    tagTypes: ['books', 'book', 'reviews', 'wishlist'],
    endpoints: () => ({}),
});
