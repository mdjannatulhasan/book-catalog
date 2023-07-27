import { IBook } from '@/types/homeType';
import { Link } from 'react-router-dom';

const Book = ({
    title,
    coverImage,
    price,
    genre,
    publicationDate,
    author,
    code = '#',
}: IBook) => {
    return (
        <div className="shadow p-4 rounded-md relative">
            {coverImage && (
                <Link to={`/book-details/${code}`}>
                    <img
                        src={coverImage}
                        alt={`${title} book cover`}
                        className="lg:max-w-sm w-full rounded-md"
                    />
                </Link>
            )}
            <div className="mt-4 flex flex-col gap-2 items-start">
                <p className="text-[#F77F00]">{genre}</p>

                <h3 className="font-semibold text-lg -mt-1 leading-snug">
                    {title}
                </h3>
                <p className="text-blue-600 font-medium">${price}</p>
                <p className="font-medium">{publicationDate}</p>
                <p className="font-medium">{author}</p>
            </div>
            {/* <p className="text-blue-700 bg-[#ffffffd5] px-3 rounded-md absolute top-8 left-8">
                {genre}
            </p> */}
        </div>
    );
};

export default Book;
