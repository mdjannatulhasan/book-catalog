/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from '../common/Container';
import SecTitle from '../common/SecTitle';
import Book from './Book';
import { Link } from 'react-router-dom';
import { BiPlus } from 'react-icons/bi';
import { Skeleton } from '../ui/skeleton';
import { IBookWithId } from '@/types/homeType';
import { useAppSelector } from '@/redux/hook';

const BookList = () => {
    const { myBooks, isLoading, count } = useAppSelector(
        (state) => state.book
    ) as any;

    let bookItems;
    if (myBooks?.length) {
        bookItems = myBooks.map(
            ({
                _id,
                title,
                coverImage,
                price,
                genre,
                publicationDate,
                author,
                status,
            }: IBookWithId) => (
                <Book
                    key={_id}
                    code={_id}
                    title={title}
                    coverImage={coverImage}
                    price={price}
                    genre={genre}
                    publicationDate={publicationDate}
                    author={author}
                    status={status}
                />
            )
        );
    }

    return (
        <section className="py-12">
            <Container>
                <div className="flex justify-between items-center gap-5">
                    <SecTitle>
                        All Books {count ? `(${count})` : '(0)'}
                    </SecTitle>
                    <Link
                        className="text-xl text-blue-600 font-semibold link flex gap-1 items-center"
                        to="/add-new-book"
                    >
                        <BiPlus /> <span>Add Book</span>
                    </Link>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-2 max-[460px]:grid-cols-1 gap-6 mt-6">
                        {!isLoading ? (
                            bookItems ? (
                                bookItems
                            ) : (
                                'No Books found'
                            )
                        ) : (
                            <>
                                <Skeleton className="h-96 lg:w-[250px] w-[200px]" />
                                <Skeleton className="h-96 lg:w-[250px] w-[200px]" />
                                <Skeleton className="h-96 lg:w-[250px] w-[200px]" />
                                <Skeleton className="h-96 lg:w-[250px] w-[200px]" />
                                <Skeleton className="h-96 lg:w-[250px] w-[200px]" />
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default BookList;
