import { useCreateWishlistMutation } from '@/redux/features/wishlist/wishlistApi';
import { useAppSelector } from '@/redux/hook';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useWishlist(code: string) {
    const [createWishlist, { error }] = useCreateWishlistMutation();
    const { email } = useAppSelector((state) => state.user);
    const navigate = useNavigate();
    const [heart, setHeart] = useState(false);
    const { wishlist } = useAppSelector((state) => state.wishlist);

    useEffect(() => {
        if (wishlist?.length && wishlist.some((item) => item['_id'] === code)) {
            setHeart(true);
        }
        if (error) {
            setHeart(false);
        }
    }, [wishlist, error]);

    const handleWishlist = async () => {
        if (!email) {
            navigate('/signin');
        }

        await createWishlist(code);
    };

    return { handleWishlist, heart, setHeart };
}
