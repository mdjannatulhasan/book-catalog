/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
// import BtnPrimary from '../common/BtnPrimary';
import { useGetMyBooksQuery } from '@/redux/features/book/bookApi';
import { useAppDispatch } from '@/redux/hook';
import { setMyBooks, setIsLoading } from '@/redux/features/book/bookSlice';

const Hero = () => {
    const [args] = useState({});
    const { data, isLoading } = useGetMyBooksQuery(args);

    const dispacth = useAppDispatch();

    useEffect(() => {
        // setSkip(false);
        dispacth(setMyBooks(data));
        dispacth(setIsLoading(isLoading));
        // setSkip(true);
    }, [data]);

    // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const formElement = e.currentTarget as HTMLFormElement;
    //     setArgs({
    //         searchTerm: formElement.searchTerm.value || undefined,
    //         genre: formElement.genre.value || undefined,
    //         year: formElement.publicationDate.value || undefined,
    //     });
    //     console.log({
    //         searchTerm: formElement.searchTerm.value || undefined,
    //         genre: formElement.genre.value || undefined,
    //         year: formElement.publicationDate.value || undefined,
    //     });

    //     setSkip(false);
    // };

    console.log(data);

    return (
        <section className="pt-6 pb-12">
            <div className="container">
                <div className="flex flex-col items-center">
                    <h1 className="lg:text-5xl text-3xl font-semibold leading-snug text-center">
                        My Books
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;
