import BookList from '@/components/all-books/BookList';
import Hero from '@/components/all-books/Hero';
import { useGetWishlistsQuery } from '@/redux/features/wishlist/wishlistApi';
import { setWishlist } from '@/redux/features/wishlist/wishlistSlice';
import { useAppDispatch } from '@/redux/hook';
import { useEffect } from 'react';

const AllBooks = () => {
    const { data, isLoading } = useGetWishlistsQuery(undefined);
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

export default AllBooks;
