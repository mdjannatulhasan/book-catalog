import { IBookWithId } from '@/types/homeType';
import Container from '../common/Container';
import SecTitle from '../common/SecTitle';
import SubTitle from '../common/SubTitle';
import BtnPrimary from '../common/BtnPrimary';
import { useGetBooksQuery } from '@/redux/features/book/bookApi';
import Book from '../all-books/Book';

const BookList = () => {
    // const ar = [
    //     {
    //         title: 'The Lord of the Rings: The Fellowship of the Ring',
    //         coverImage:
    //             'https://i.ibb.co/8sHXH7s/fellowship-of-the-ring-illustration-johan-egerkrans.jpg',
    //         price: 15.99,
    //         author: 'J.R.R. Tolkien',
    //         genre: 'Fantasy',
    //         publicationDate: 'July 29, 1954',
    //         reviews: 4352,
    //     },
    //     {
    //         title: 'The Lord of the Rings: The Two Towers',
    //         coverImage:
    //             'https://i.ibb.co/pj1VmCK/two-towers-illustration-johan-egerkrans.jpg',
    //         price: 14.99,
    //         author: 'J.R.R. Tolkien',
    //         genre: 'Adventure',
    //         publicationDate: 'November 11, 1954',
    //         reviews: 3927,
    //     },
    //     {
    //         title: 'The Lord of the Rings: The Return of the King',
    //         coverImage:
    //             'https://i.ibb.co/Jxdc2P1/return-of-the-king-illustration-johan-egerkrans.jpg',
    //         price: 16.99,
    //         author: 'J.R.R. Tolkien',
    //         genre: 'Fantasy',
    //         publicationDate: 'October 20, 1955',
    //         reviews: 4123,
    //     },
    //     {
    //         title: "Harry Potter and the Sorcerer's Stone",
    //         coverImage: 'https://i.ibb.co/dfrPkJM/2359.webp',
    //         price: 12.99,
    //         author: 'J.K. Rowling',
    //         genre: 'Fantasy',
    //         publicationDate: 'June 26, 1997',
    //         reviews: 8246,
    //     },
    //     {
    //         title: 'Harry Potter and the Chamber of Secrets',
    //         coverImage:
    //             'https://i.ibb.co/qxtdhVR/Harry-Potter-Book-Covers-Chamber-of-Secrets-us-1-682x1024.png',
    //         price: 13.99,
    //         author: 'J.K. Rowling',
    //         genre: 'Fantasy',
    //         publicationDate: 'July 2, 1998',
    //         reviews: 7513,
    //     },
    //     {
    //         title: 'Harry Potter and the Prisoner of Azkaban',
    //         coverImage: 'https://i.ibb.co/2S2Jkkn/2359-1.webp',
    //         price: 14.99,
    //         author: 'J.K. Rowling',
    //         genre: 'Adventure',
    //         publicationDate: 'July 8, 1999',
    //         reviews: 6901,
    //     },
    //     {
    //         title: 'Harry Potter and the Goblet of Fire',
    //         coverImage:
    //             'https://i.ibb.co/MMFKrWk/goblet-of-fire-ebook-cover.jpg',
    //         price: 15.99,
    //         author: 'J.K. Rowling',
    //         genre: 'Fantasy',
    //         publicationDate: 'July 8, 2000',
    //         reviews: 8235,
    //     },
    //     {
    //         title: 'Harry Potter and the Order of the Phoenix',
    //         coverImage: 'https://i.ibb.co/DtSmVNR/1660.webp',
    //         price: 16.99,
    //         author: 'J.K. Rowling',
    //         genre: 'Fantasy',
    //         publicationDate: 'June 21, 2003',
    //         reviews: 7523,
    //     },
    //     {
    //         title: 'Harry Potter and the Half-Blood Prince',
    //         coverImage: 'https://i.ibb.co/R2Dn1Wz/2359-2.webp',
    //         price: 17.99,
    //         author: 'J.K. Rowling',
    //         genre: 'Thriller',
    //         publicationDate: 'July 16, 2005',
    //         reviews: 6743,
    //     },
    //     {
    //         title: 'Harry Potter and the Deathly Hallows',
    //         coverImage: 'https://i.ibb.co/JsBHMQx/harry-potter-7.jpg',
    //         price: 18.99,
    //         author: 'J.K. Rowling',
    //         genre: 'Fantasy',
    //         publicationDate: 'July 21, 2007',
    //         reviews: 8372,
    //     },
    //     {
    //         title: 'To Kill a Mockingbird',
    //         coverImage: 'link_to_cover_image',
    //         price: 11.99,
    //         author: 'Harper Lee',
    //         genre: 'Classic',
    //         publicationDate: 'July 11, 1960',
    //         reviews: 5379,
    //     },
    //     {
    //         title: '1984',
    //         coverImage: 'link_to_cover_image',
    //         price: 10.99,
    //         author: 'George Orwell',
    //         genre: 'Dystopian',
    //         publicationDate: 'June 8, 1949',
    //         reviews: 6215,
    //     },
    //     {
    //         title: 'The Great Gatsby',
    //         coverImage: 'link_to_cover_image',
    //         price: 12.99,
    //         author: 'F. Scott Fitzgerald',
    //         genre: 'Literary Fiction',
    //         publicationDate: 'April 10, 1925',
    //         reviews: 4876,
    //     },
    //     {
    //         title: 'Pride and Prejudice',
    //         coverImage: 'link_to_cover_image',
    //         price: 9.99,
    //         author: 'Jane Austen',
    //         genre: 'Romance',
    //         publicationDate: 'January 28, 1813',
    //         reviews: 5423,
    //     },
    //     {
    //         title: 'The Martian',
    //         coverImage: 'link_to_cover_image',
    //         price: 14.99,
    //         author: 'Andy Weir',
    //         genre: 'Science Fiction',
    //         publicationDate: 'February 11, 2014',
    //         reviews: 3891,
    //     },
    //     {
    //         title: 'Gone Girl',
    //         coverImage: 'link_to_cover_image',
    //         price: 13.99,
    //         author: 'Gillian Flynn',
    //         genre: 'Mystery',
    //         publicationDate: 'May 24, 2012',
    //         reviews: 4265,
    //     },
    //     {
    //         title: 'Educated',
    //         coverImage: 'link_to_cover_image',
    //         price: 16.99,
    //         author: 'Tara Westover',
    //         genre: 'Memoir',
    //         publicationDate: 'February 20, 2018',
    //         reviews: 3648,
    //     },
    //     {
    //         title: 'The Night Circus',
    //         coverImage: 'link_to_cover_image',
    //         price: 15.99,
    //         author: 'Erin Morgenstern',
    //         genre: 'Fantasy',
    //         publicationDate: 'September 13, 2011',
    //         reviews: 4187,
    //     },
    //     {
    //         title: 'The Girl with the Dragon Tattoo',
    //         coverImage: 'link_to_cover_image',
    //         price: 11.99,
    //         author: 'Stieg Larsson',
    //         genre: 'Thriller',
    //         publicationDate: 'August 16, 2005',
    //         reviews: 4826,
    //     },
    //     {
    //         title: 'The Alchemist',
    //         coverImage: 'link_to_cover_image',
    //         price: 9.99,
    //         author: 'Paulo Coelho',
    //         genre: 'Philosophical Fiction',
    //         publicationDate: '1988',
    //         reviews: 5763,
    //     },
    //     {
    //         title: 'The Da Vinci Code',
    //         coverImage: 'link_to_cover_image',
    //         price: 12.99,
    //         author: 'Dan Brown',
    //         genre: 'Mystery',
    //         publicationDate: 'March 18, 2003',
    //         reviews: 5123,
    //     },
    // ] as IBook[];

    const { data } = useGetBooksQuery(undefined);

    let bookItems;
    if (data?.data) {
        bookItems = data.data
            .slice(0, 10)
            .map(
                ({
                    _id,
                    title,
                    coverImage,
                    price,
                    genre,
                    publicationDate,
                    author,
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
                    />
                )
            );
    }

    return (
        <section className="py-12">
            <Container>
                <div className="flex flex-col justify-center items-center gap-5">
                    <SecTitle>New Horizons of Reading</SecTitle>
                    <SubTitle center>
                        Immerse Yourself in the Latest Literary Treasures. 10
                        Recently Added Books That Will Take You on a Journey of
                        Wonder and Reflection.
                    </SubTitle>

                    <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-2 max-[460px]:grid-cols-1 gap-6 mt-6">
                        {bookItems}
                    </div>
                    <div className="mt-5">
                        <BtnPrimary to="/books" link>
                            Explore More
                        </BtnPrimary>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default BookList;
