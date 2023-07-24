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
                            <li className="text-[#ffffff]">Explore By</li>
                            <li className="text-[#ffffff]">Category</li>
                            <li className="text-[#ffffff]">Author</li>
                            <li className="text-[#ffffff]">Publisher</li>
                        </ul>
                    </div>
                    <div className="flex gap-20">
                        <ul className="space-y-2">
                            <li className="text-[#ffffff]">Explore By</li>
                            <li className="text-[#ffffff]">Category</li>
                            <li className="text-[#ffffff]">Author</li>
                            <li className="text-[#ffffff]">Publisher</li>
                        </ul>
                    </div>
                    <div className="flex gap-2 text-2xl"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
