import App from '@/App';
import AllBooks from '@/pages/AllBooks';
import BookDetails from '@/pages/BookDetails';
import EditBook from '@/pages/EditBook';
import Home from '@/pages/Home';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import { createBrowserRouter } from 'react-router-dom';

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
                path: '/book-details/:id',
                element: <BookDetails />,
            },
            {
                path: '/book/edit/:id',
                element: <EditBook />,
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
