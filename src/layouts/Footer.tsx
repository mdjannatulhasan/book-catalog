import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-light.png';

const Footer = () => {
    return (
        <footer className="bg-[#0e1a32]">
            <div className="container py-6">
                <div className="flex justify-between text-[#ffffff]">
                    <div>
                        <img className="h-[50px]" src={logo} alt="Logo" />
                    </div>
                    <div className="flex gap-20">
                        <ul className="space-y-2">
                            <li className="text-[#ffffff] font-bold">
                                Explore By
                            </li>
                            <li className="text-[#ffffff]">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-[#ffffff]">
                                <Link to="/books">All Books</Link>
                            </li>
                            <li className="text-[#ffffff]">
                                <Link to="/add-new-book">Add your book</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-20">
                        <ul className="space-y-2">
                            <li className="text-[#ffffff] font-bold">
                                Visitor's Corner
                            </li>
                            <li className="text-[#ffffff]">
                                <Link to="/login">Sign in</Link>
                            </li>
                            <li className="text-[#ffffff]">
                                <Link to="/signup">Sign up</Link>
                            </li>
                            <li className="text-[#ffffff]">
                                <Link to="/wishlist">Wishlist</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-2 text-2xl"></div>
                </div>
            </div>
            <div className="text-center pb-4 text-white opacity-60">
                © 2023 - All rights reserved, Owner - Hasan
            </div>
        </footer>
    );
};

export default Footer;
