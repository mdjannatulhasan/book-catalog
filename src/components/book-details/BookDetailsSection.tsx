import { IBookWithId } from '@/types/homeType';
import Container from '../common/Container';
import { useAppSelector } from '@/redux/hook';
import { usePalette } from 'color-thief-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiHouse } from 'react-icons/gi';
import { useDeleteBookMutation } from '@/redux/features/book/bookApi';
import { useToast } from '../ui/use-toast';
import { useDispatch } from 'react-redux';
import { handleLogout } from '@/redux/features/user/userSlice';
import Reviews from './Reviews';

const BookDetailsSection = () => {
    const singleBook = useAppSelector(
        (state) => state.book.singleBook
    ) as IBookWithId;

    const { id, role } = useAppSelector((state) => state.user);

    console.log(id, role, singleBook?.addedBy);

    const navigate = useNavigate();
    const { toast } = useToast();
    const dispatch = useDispatch();
    const [palette, setPalette] = useState([]);

    const { data, error } = usePalette(singleBook?.coverImage, 4, 'hex', {
        crossOrigin: 'anonymous',
    });

    useEffect(() => {
        setPalette(data as never);
    }, [data]);

    const [deleteBook, { isLoading }] = useDeleteBookMutation();

    const handleDelete = async () => {
        try {
            const response = await deleteBook(singleBook?._id);
            console.log(response);
            if ('data' in response) {
                toast({
                    variant: 'success',
                    title: 'Book deleted successfully.',
                    description: '',
                });
                navigate(`/books`);
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Book delete Failed.',
                    description: ``,
                });
                if (
                    'status' in response.error &&
                    response.error.status != 401
                ) {
                    dispatch(handleLogout());
                }
            }
        } catch (e) {
            console.log(error);

            toast({
                variant: 'destructive',
                title: 'Delete Failed.',
                description: 'There was a problem with your request.',
            });
        }
    };

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
                                    {singleBook?.title} <br />
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
                                <div className="grid grid-cols-3 gap-4">
                                    <p className="col-span-1 text-lg font-medium">
                                        Reviews
                                    </p>
                                    <p className="col-span-2 text-lg">
                                        <Reviews id={singleBook?._id} />
                                    </p>
                                </div>
                                {singleBook?.status === 'pending' && (
                                    <p className="text-[16px] font-normal text-[#ff5b5b]">
                                        Your book status is{' '}
                                        <strong>{singleBook?.status}</strong>.
                                        One of our admin will review your
                                        request. <br /> Till then you can't
                                        delete or see your book on the homepage.
                                    </p>
                                )}
                            </div>
                            {(singleBook?.addedBy === id ||
                                role === 'admin') && (
                                <div className="w-full round flex justify-start gap-4 mt-3">
                                    <Link
                                        to={`/book/edit/${singleBook?._id}`}
                                        className={`text-[white] py-2 px-5 rounded-md text-center max-w-[300px]'
                                } w-full block font-medium`}
                                        style={{
                                            backgroundImage: `linear-gradient(to top left, ${
                                                palette ? palette[0] : '#4397ee'
                                            }, ${
                                                palette
                                                    ? palette[
                                                          palette.length - 1
                                                      ]
                                                    : '#4397ee'
                                            })`,
                                        }}
                                    >
                                        Edit
                                    </Link>
                                    {singleBook?.status !== 'pending' && (
                                        <button
                                            onClick={handleDelete}
                                            disabled={isLoading}
                                            className={` text-[white] py-2 px-5 rounded-md text-center max-w-[300px]'
                                } w-full block font-medium`}
                                            style={{
                                                backgroundImage: `linear-gradient(to top left, ${
                                                    palette
                                                        ? palette[0]
                                                        : '#4397ee'
                                                }, ${
                                                    palette
                                                        ? palette[
                                                              palette.length - 1
                                                          ]
                                                        : '#4397ee'
                                                })`,
                                            }}
                                        >
                                            Delete
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
export default BookDetailsSection;
