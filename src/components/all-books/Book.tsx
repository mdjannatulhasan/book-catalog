import { useCreateWishlistMutation } from '@/redux/features/wishlist/wishlistApi';
import { IBook } from '@/types/homeType';
import { useState } from 'react';
import { GiHearts } from 'react-icons/gi';
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
    const [heart, setHeart] = useState(false);
    const [createWishlist, { error }] = useCreateWishlistMutation();

    const handleWishlist = async () => {
        console.log(code);

        const response = await createWishlist(code);
        console.log(response);
    };

    return (
        <div className="shadow p-4 rounded-md relative">
            <div>
                {coverImage && coverImage != '#' && (
                    <Link to={`/book-details/${code}`}>
                        <img
                            src={coverImage}
                            alt={`${title} book cover`}
                            className="lg:max-w-sm w-full rounded-md"
                        />
                    </Link>
                )}
            </div>
            <div
                className={`absolute top-6 right-6 ${
                    heart ? 'text-[#cf0c09]' : 'text-white'
                } bg-[#ffd2d1] rounded-md p-1 hover:cursor-pointer`}
                onClick={() => {
                    setHeart(!heart);
                    handleWishlist();
                }}
            >
                <GiHearts />
            </div>
            <div className="mt-4 flex flex-col gap-2 items-start">
                <p className="text-[#F77F00]">{genre}</p>

                <Link to={`/book-details/${code}`}>
                    <h3 className="font-semibold text-lg -mt-1 leading-snug">
                        {title}
                    </h3>
                </Link>
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
