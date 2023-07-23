import { IBook } from '@/types/homeType';

const Product = ({ title, coverImage, price, genre }: IBook) => {
    return (
        <div className="shadow p-5 rounded-md">
            <img
                src={coverImage}
                alt={title}
                className="max-w-sm w-full rounded-md"
            />
            <h3>{title}</h3>
            <p>{price}</p>
            <p>{genre}</p>
        </div>
    );
};

export default Product;
