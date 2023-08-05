import BookList from '@/components/home/BookList';
import Hero from '@/components/home/Hero';
import { useGetWishlistsQuery } from '@/redux/features/wishlist/wishlistApi';
import { setWishlist } from '@/redux/features/wishlist/wishlistSlice';
import { useAppDispatch } from '@/redux/hook';
import { useEffect } from 'react';

export default function Home() {
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
}
