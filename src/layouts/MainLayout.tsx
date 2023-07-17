import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}
