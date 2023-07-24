import { FormEvent } from 'react';
import BtnPrimary from '../common/BtnPrimary';

const Hero = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <section className="pt-6 pb-12">
            <div className="container">
                <div className="flex flex-col items-center">
                    <h1 className="text-5xl font-semibold leading-snug text-center">
                        Our Collection
                    </h1>
                    <p className="my-3 text-2xl max-w-[800px] text-center">
                        Explore a vast tapestry of enchanting stories across
                        genres, and immerse yourself in our literary odyssey -
                        All Books await your discovery.
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className="mt-5 flex flex-col gap-4 w-full justify-center items-center"
                    >
                        <div className="flex gap-2 w-full justify-center">
                            <input
                                type="text"
                                placeholder="Please enter title, author or genre"
                                className="border border-blue-600 px-2 py-1 w-full max-w-[450px] rounded-md"
                            />
                            <input
                                type="number"
                                placeholder="Publication Year"
                                className="border border-blue-600 px-2 py-1 w-full max-w-[150px] rounded-md"
                            />
                            <input
                                type="text"
                                placeholder="Genre"
                                className="border border-blue-600 px-2 py-1 w-full max-w-[150px] rounded-md"
                            />
                        </div>
                        <div className="w-full flex justify-center">
                            <BtnPrimary type="submit">Search</BtnPrimary>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Hero;
