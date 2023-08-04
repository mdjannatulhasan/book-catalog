import heroImg from '../../assets/images/addBook.jpg';

const Hero = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${heroImg})`,
            }}
            className="relative bg-cover bg-center"
        >
            <div className="container py-24 relative z-10">
                <div className=" max-w-[700px]">
                    <div>
                        <h1 className="lg:text-5xl text-3xl font-semibold leading-snug text-[#eaeaea]">
                            Share Your Literary Treasures
                        </h1>
                        <p className="my-5 text-2xl text-[#eaeaea]">
                            Enchant our catalog with your enthralling books,
                            enriching minds with captivating tales. Join now
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute bg-[#162031] opacity-20 top-0 h-full w-full"></div>
        </section>
    );
};

export default Hero;
