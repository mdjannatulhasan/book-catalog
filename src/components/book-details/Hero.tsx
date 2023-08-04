import { useAppSelector } from '@/redux/hook';
import { IBook } from '@/types/homeType';

const Hero = () => {
    const singleBook = useAppSelector(
        (state) => state.book.singleBook
    ) as IBook;

    return (
        <section
            style={{
                backgroundImage: `url(${singleBook?.coverImage})`,
            }}
            className="relative bg-cover bg-center"
        >
            <div className="container py-24 relative z-10">
                <div className=" max-w-[700px]">
                    <div>
                        <h1 className="lg:text-5xl text-3xl font-semibold leading-normal text-[#eaeaea]">
                            {singleBook?.title}
                        </h1>
                        <p className="my-5 text-2xl text-[#eaeaea]">
                            By {singleBook?.author}
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute bg-[#162031] opacity-20 top-0 h-full w-full"></div>
        </section>
    );
};

export default Hero;
