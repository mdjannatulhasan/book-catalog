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
                            My Reading Journey
                        </h1>
                        <p className="my-5 text-2xl text-[#eaeaea]">
                            Experience the Journey: From desires to progress to
                            triumphs, unfolding pages of your literary
                            adventure.
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute bg-[#162031] opacity-20 top-0 h-full w-full"></div>
        </section>
    );
};

export default Hero;
