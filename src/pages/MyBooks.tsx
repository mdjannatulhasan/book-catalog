import BookList from '@/components/my-books/BookList';
import Hero from '@/components/my-books/Hero';
import { useGetWishlistsQuery } from '@/redux/features/wishlist/wishlistApi';
import { setWishlist } from '@/redux/features/wishlist/wishlistSlice';
import { useAppDispatch } from '@/redux/hook';
import { useEffect } from 'react';

const MyBooks = () => {
    const { data } = useGetWishlistsQuery(undefined);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setWishlist(data));
    }, [data]);

    return (
        <>
            <Hero />
            <BookList />
        </>
    );
};

export default MyBooks;
