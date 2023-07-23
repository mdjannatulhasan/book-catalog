import { IBook } from '@/types/homeType';

const Product = ({ title, coverImage, price, genre }: IBook) => {
    return (
        <div className="shadow p-4 rounded-md relative">
            <img
                src={coverImage}
                alt={title}
                className="lg:max-w-sm w-full rounded-md"
            />
            <div className="mt-4 flex flex-col gap-2 items-start">
                <p className="text-[#F77F00]">{genre}</p>

                <h3 className="font-semibold text-lg -mt-1 leading-snug">
                    {title}
                </h3>
                <p className="text-blue-600 font-medium">${price}</p>
            </div>
            {/* <p className="text-blue-700 bg-[#ffffffd5] px-3 rounded-md absolute top-8 left-8">
                {genre}
            </p> */}
        </div>
    );
};

export default Product;
