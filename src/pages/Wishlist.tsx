import { useGetWishlistsQuery } from '@/redux/features/wishlist/wishlistApi';
import { setWishlist } from '@/redux/features/wishlist/wishlistSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useEffect } from 'react';

const Wishlist = () => {
    const { data } = useGetWishlistsQuery(undefined);
    const dispatch = useAppDispatch();
    const { wishlist } = useAppSelector((state) => state.wishlist);

    useEffect(() => {
        dispatch(setWishlist(data));
    }, [data]);
    console.log(wishlist);

    return (
        <div>
            <ul>
                {wishlist?.length &&
                    wishlist.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    ))}
            </ul>
        </div>
    );
};

export default Wishlist;
