import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { LucideAlignRight } from 'lucide-react';
import { GiBookCover, GiHouse } from 'react-icons/gi';
import { BiLogIn, BiLogOut, BiSolidUserPlus } from 'react-icons/bi';
import NavLink from '@/components/common/NavLink';

const Navbar = () => {
    return (
        <>
            <nav className="w-full h-16 backdrop-blur-lg z-10 py-2">
                <div className="container bg-white/60">
                    <div className="flex items-center justify-between w-full h-full mx-auto ">
                        <div>
                            <Link to="/">
                                <img
                                    className="h-[50px]"
                                    src={logo}
                                    alt="log"
                                />
                            </Link>
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
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <Button variant={'ghost'}>
                                                <LucideAlignRight />
                                            </Button>
                                        </SheetTrigger>
                                        <SheetContent className="bg-red-500">
                                            <SheetHeader>
                                                <SheetTitle className="text-2xl">
                                                    Bookish Pathways
                                                </SheetTitle>
                                                <SheetDescription className="text-lg">
                                                    Unleash Your Imagination,
                                                    Explore Boundless Stories
                                                    with us. Here are our main
                                                    pages for you:
                                                </SheetDescription>
                                            </SheetHeader>

                                            <div className="mt-7 text-xl font-semibold">
                                                <ul className="flex flex-col gap-4">
                                                    <li>
                                                        <NavLink to="/">
                                                            <GiHouse />
                                                            <span>Home</span>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/books">
                                                            <GiBookCover />
                                                            <span>
                                                                All Books
                                                            </span>
                                                        </NavLink>
                                                    </li>
                                                    <li className="border-t pt-4 border-t-[#cccccc]">
                                                        <NavLink to="/signin">
                                                            <BiLogIn />
                                                            <span>Sign in</span>
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/signup">
                                                            <BiSolidUserPlus />
                                                            <span>Sign up</span>
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </SheetContent>
                                    </Sheet>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
