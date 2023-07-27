import App from '@/App';
import AddBook from '@/pages/AddBook';
import AllBooks from '@/pages/AllBooks';
import BookDetails from '@/pages/BookDetails';
import EditBook from '@/pages/EditBook';
import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: '/books',
                element: <AllBooks />,
            },
            {
                path: '/add-book',
                element: (
                    <PrivateRoute>
                        <AddBook />
                    </PrivateRoute>
                ),
            },
            {
                path: '/book-details/:id',
                element: <BookDetails />,
            },
            {
                path: '/book/edit/:id',
                element: (
                    <PrivateRoute>
                        <EditBook />
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: '/signin',
        element: <SignIn />,
    },
    {
        path: '/signup',
        element: <SignUp />,
    },
]);

export default routes;
