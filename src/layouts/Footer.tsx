import logo from '../assets/images/logo.png';

const Footer = () => {
    return (
        <div className="p-20">
            <div className="flex justify-between">
                <div>
                    <img className="h-[50px]" src={logo} alt="Logo" />
                </div>
                <div className="flex gap-20">
                    <ul className="space-y-2">
                        <li>Explore By</li>
                        <li>Category</li>
                        <li>Author</li>
                        <li>Publisher</li>
                    </ul>
                </div>
                <div className="flex gap-20">
                    <ul className="space-y-2">
                        <li>Explore By</li>
                        <li>Category</li>
                        <li>Author</li>
                        <li>Publisher</li>
                    </ul>
                </div>
                <div className="flex gap-20">
                    <ul className="space-y-2">
                        <li>Explore By</li>
                        <li>Category</li>
                        <li>Author</li>
                        <li>Publisher</li>
                    </ul>
                </div>
                <div className="flex gap-2 text-2xl"></div>
            </div>
        </div>
    );
};

export default Footer;
