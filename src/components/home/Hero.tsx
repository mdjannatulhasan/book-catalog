import heroImg from '../../assets/images/hero.webp';

const Hero = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${heroImg})`,
            }}
            className="relative bg-cover bg-center"
        >
            <div className="container py-36 relative z-10">
                <div className=" max-w-[700px]">
                    <div>
                        <h1 className="lg:text-5xl text-3xl font-semibold leading-snug text-[#eaeaea]">
                            Journey Through the Pages of Knowledge
                        </h1>
                        <p className="my-5 lg:text-2xl text-xl text-[#eaeaea]">
                            Step into a boundless universe of captivating
                            stories. Immerse yourself in the magic of books,
                            where imagination knows no limits. Explore, escape,
                            and let the pages transport you to extraordinary
                            worlds.
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute bg-[#162031] opacity-60 top-0 h-full w-full"></div>
        </section>
    );
};

export default Hero;
