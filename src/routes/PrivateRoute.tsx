import { useAppSelector } from '@/redux/hook';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const { email } = useAppSelector((state) => state.user);
    const { pathname } = useLocation();
    if (!email) {
        return <Navigate to="/signin" state={{ path: pathname }} />;
    }
    return children;
};

export default PrivateRoute;
