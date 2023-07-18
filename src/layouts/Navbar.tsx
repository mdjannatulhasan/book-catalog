import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    return (
        <nav className="w-full h-16 backdrop-blur-lg z-10">
            <div className="h-full w-full bg-white/60">
                <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
                    <div>
                        <img className="h-[50px]" src={logo} alt="log" />
                    </div>
                    <div>
                        <ul className="flex items-center">
                            <li>
                                <Button variant="link" asChild>
                                    <Link to="/">Home</Link>
                                </Button>
                            </li>
                            <li>
                                <Button variant="link" asChild>
                                    <Link to="/products">All Books</Link>
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="min-w-[200px]">
                        <ul className="flex justify-end">
                            <li>
                                <Button variant="link" asChild>
                                    <Link to="/signIn">Sign In</Link>
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
