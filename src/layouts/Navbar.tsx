import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    return (
        <nav className="w-full h-16 backdrop-blur-lg z-10 py-2">
            <div className="container bg-white/60">
                <div className="flex items-center justify-between w-full h-full mx-auto ">
                    <div>
                        <Link to="/">
                            <img className="h-[50px]" src={logo} alt="log" />
                        </Link>
                    </div>
                    <div>
                        <ul className="flex items-center">
                            <li>
                                <Button
                                    className="text-md"
                                    variant="link"
                                    asChild
                                >
                                    <Link to="/">Home</Link>
                                </Button>
                            </li>
                            <li>
                                <Button
                                    className="text-md"
                                    variant="link"
                                    asChild
                                >
                                    <Link to="/books">All Books</Link>
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="min-w-[200px]">
                        <ul className="flex justify-end">
                            <li>
                                <Button
                                    className="text-md"
                                    variant="link"
                                    asChild
                                >
                                    <Link to="/signIn">Sign In</Link>
                                </Button>
                            </li>
                            <li>
                                <Button
                                    className="text-md"
                                    variant="link"
                                    asChild
                                >
                                    <Link to="/signIn">Sign Up</Link>
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
