import { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import { useAppDispatch } from './redux/hook';
import { setUser } from './redux/features/user/userSlice';
import { removeWishlist } from './redux/features/wishlist/wishlistSlice';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email) {
            dispatch(setUser(email));
        } else {
            dispatch(setUser(''));
            dispatch(removeWishlist());
        }
    }, []);

    return (
        <div>
            <MainLayout />
        </div>
    );
}

export default App;
