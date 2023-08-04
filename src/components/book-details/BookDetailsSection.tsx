import { IBook, IBookWithId } from '@/types/homeType';
import Container from '../common/Container';
import { useAppSelector } from '@/redux/hook';
import { usePalette } from 'color-thief-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHouse } from 'react-icons/gi';

const BookDetailsSection = () => {
    const singleBook = useAppSelector(
        (state) => state.book.singleBook
    ) as IBookWithId;
    const [palette, setPalette] = useState([]);

    const { data, error, loading } = usePalette(
        singleBook?.coverImage,
        4,
        'hex',
        { crossOrigin: 'anonymous' }
    );

    useEffect(() => {
        setPalette(data as never);
    }, [data]);

    console.log(palette);

    return (
        <section className="pb-12">
            <Container>
                <div className="max-w-[1080px] mx-auto shadow  p-12 rounded-md">
                    <div className={`grid grid-cols-12 gap-9 rounded-md`}>
                        <div className="col-span-5 p-8 relative shadow-lg">
                            <img
                                className="w-full relative z-10 rounded-md"
                                src={singleBook?.coverImage}
                                alt=""
                            />
                            <div
                                className="inset-0 absolute opacity-60 rounded-md"
                                style={{
                                    backgroundImage: `linear-gradient(to bottom, ${
                                        palette && palette[0]
                                    }, ${
                                        palette && palette[palette.length - 1]
                                    })`,
                                }}
                            ></div>
                        </div>
                        <div className="col-span-7 flex flex-col justify-between">
                            <div className="flex flex-col gap-4">
                                <div className=" flex gap-2 border-b border-[#dadada] pb-3">
                                    <Link
                                        to="/"
                                        className="hover:text-blue-700 flex items-center gap-2"
                                    >
                                        <GiHouse /> Home
                                    </Link>
                                    <p>/</p>
                                    <Link
                                        to="/books"
                                        className="hover:text-blue-700 flex items-center gap-2"
                                    >
                                        All Books
                                    </Link>
                                </div>
                                <h2 className="text-3xl font-semibold pb-3">
                                    {singleBook?.title}
                                </h2>
                                <div className="grid grid-cols-3 gap-4 items-center">
                                    <p className="col-span-1 text-lg font-medium">
                                        Price
                                    </p>
                                    <p
                                        className={`col-span-2 text-xl font-bold`}
                                        style={{ color: palette && palette[0] }}
                                    >
                                        ${singleBook?.price}
                                    </p>
                                </div>
                                <div className="grid grid-cols-12 gap-4 items-center">
                                    <p className="col-span-4 text-lg font-medium">
                                        Author
                                    </p>
                                    <p className="col-span-8 text-lg">
                                        {singleBook?.author}
                                    </p>
                                </div>
                                <div className="grid grid-cols-12 gap-4 items-center">
                                    <p className="col-span-4 text-lg font-medium">
                                        Genre
                                    </p>
                                    <p className="col-span-8 text-lg">
                                        {singleBook?.genre}
                                    </p>
                                </div>
                                <div className="grid grid-cols-12 gap-4 items-center">
                                    <p className="col-span-4 text-lg font-medium">
                                        Publication Date
                                    </p>
                                    <p className="col-span-8 text-lg">
                                        {singleBook?.publicationDate}
                                    </p>
                                </div>
                                <div className="grid grid-cols-3 gap-4 items-center">
                                    <p className="col-span-1 text-lg font-medium">
                                        Reviews
                                    </p>
                                    <p className="col-span-2 text-lg">
                                        {singleBook?.reviews ||
                                            'No reviews yet'}
                                    </p>
                                </div>
                            </div>
                            <div className="w-full round flex justify-start gap-4">
                                <Link
                                    to={`/book/edit/${singleBook?._id}`}
                                    className={`text-[white] py-2 px-5 rounded-md text-center max-w-[300px]'
                                } w-full block font-medium`}
                                    style={{
                                        backgroundImage: `linear-gradient(to bottom right, ${
                                            palette && palette[0]
                                        }, ${
                                            palette &&
                                            palette[palette.length - 1]
                                        })`,
                                    }}
                                >
                                    Edit
                                </Link>
                                <Link
                                    to=""
                                    className={` text-[white] py-2 px-5 rounded-md text-center max-w-[300px]'
                                } w-full block font-medium`}
                                    style={{
                                        backgroundImage: `linear-gradient(to top left, ${
                                            palette && palette[0]
                                        }, ${
                                            palette &&
                                            palette[palette.length - 1]
                                        })`,
                                    }}
                                >
                                    Delete
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
export default BookDetailsSection;
