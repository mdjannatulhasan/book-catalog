import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ children, to }: { children: ReactNode; to: string }) => {
    return (
        <Link to={to} className="flex items-center gap-3 nav-link">
            {children}
        </Link>
    );
};

export default NavLink;
