import { FormEvent, useEffect, useState } from 'react';
import BtnPrimary from '../common/BtnPrimary';
import { useGetBooksQuery } from '@/redux/features/book/bookApi';
import { useAppDispatch } from '@/redux/hook';
import { setBooks, setIsLoading } from '@/redux/features/book/bookSlice';

const Hero = () => {
    const [skip, setSkip] = useState(false);
    const [args, setArgs] = useState({});
    const { data, isLoading } = useGetBooksQuery(args, { skip });

    const dispacth = useAppDispatch();

    useEffect(() => {
        setSkip(false);
        dispacth(setBooks(data));
        dispacth(setIsLoading(isLoading));
        // setSkip(true);
    }, [data]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formElement = e.currentTarget as HTMLFormElement;
        setArgs({
            searchTerm: formElement.searchTerm.value || undefined,
            genre: formElement.genre.value || undefined,
            year: formElement.publicationDate.value || undefined,
        });
        console.log({
            searchTerm: formElement.searchTerm.value || undefined,
            genre: formElement.genre.value || undefined,
            year: formElement.publicationDate.value || undefined,
        });

        setSkip(false);
    };
    console.log(data);

    return (
        <section className="pt-6 pb-12">
            <div className="container">
                <div className="flex flex-col items-center">
                    <h1 className="lg:text-5xl text-3xl font-semibold leading-snug text-center">
                        Our Collection
                    </h1>
                    <p className="my-3 lg:text-2xl text-xl max-w-[800px] text-center">
                        Explore a vast tapestry of enchanting stories across
                        genres, and immerse yourself in our literary odyssey -
                        All Books await your discovery.
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className="mt-5 flex flex-col gap-5 max-w-[800px] w-full justify-center items-center rounded-md"
                    >
                        <div className="flex gap-2 w-full justify-center">
                            <input
                                type="text"
                                name="searchTerm"
                                placeholder="Please enter title, author or genre"
                                className="border border-blue-600 px-3 py-2 w-full max-w-[450px] rounded-md"
                            />
                            <input
                                type="number"
                                name="publicationDate"
                                placeholder="Publication Year"
                                className="border border-blue-600 pl-3 pr-1 py-2 w-full max-w-[150px] rounded-md"
                            />
                            <input
                                type="text"
                                placeholder="Genre"
                                name="genre"
                                className="border border-blue-600 px-3 py-2 w-full max-w-[150px] rounded-md"
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
