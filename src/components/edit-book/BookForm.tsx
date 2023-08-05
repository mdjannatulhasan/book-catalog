/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent } from 'react';
import BtnPrimary from '../common/BtnPrimary';
import Container from '../common/Container';
import InputCustom from '../common/InputCustom';
import SecTitle from '../common/SecTitle';
import { useUpdateBookMutation } from '@/redux/features/book/bookApi';
import { useToast } from '../ui/use-toast';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { handleLogout } from '@/redux/features/user/userSlice';
import { IBookWithId } from '@/types/homeType';
import { useNavigate } from 'react-router-dom';

const BookForm = () => {
    const [updateBook, { error, isLoading }] = useUpdateBookMutation();
    const { toast } = useToast();
    const singleBook = useAppSelector(
        (state) => state.book.singleBook
    ) as IBookWithId;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formElement = e.currentTarget as HTMLFormElement;
        const data = {
            code: formElement.code.value,
            coverImage: formElement.coverImage.value,
            title: formElement.bookTitle.value,
            price: parseFloat(formElement.price.value),
            author: formElement.author.value,
            genre: formElement.genre.value,
            publicationDate: formElement.publicationDate.value,
        };

        try {
            const response = await updateBook({
                data: data,
                id: singleBook?._id,
            });

            if ('data' in response) {
                toast({
                    variant: 'success',
                    title: 'Book updated successfully.',
                    description: '',
                });
                navigate(`/book-details/${singleBook?._id}`);
            } else {
                const errorMessage =
                    'data' in response.error
                        ? (response.error.data as { message: string })?.message
                        : 'Something Went Wrong';
                const errorMessages =
                    'data' in response.error
                        ? (
                              response.error.data as {
                                  errorMessages: any;
                                  message: string;
                              }
                          )?.errorMessages[0].message
                        : 'Error in form';
                let path =
                    'data' in response.error
                        ? (
                              response.error.data as {
                                  errorMessages: any;
                                  message: string;
                              }
                          )?.errorMessages[0].path
                        : '';
                if (path == 'price') {
                    path = 'Price';
                }
                toast({
                    variant: 'destructive',
                    title: 'Book update Failed.',
                    description: `${errorMessage}${
                        'status' in response.error &&
                        response.error.status != 401
                            ? `- ${errorMessages}`
                            : ''
                    } ${path && `'in' ${path}`}`,
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
                title: 'Uh oh! Login Failed.',
                description: 'There was a problem with your request.',
            });
        }
    };

    return (
        <section className="py-16">
            <Container>
                <div className="text-center mb-4">
                    <SecTitle>Update book</SecTitle>
                </div>
                <div className="shadow p-8 max-w-4xl mx-auto">
                    {singleBook && (
                        <form id="bookForm" onSubmit={handleSubmit}>
                            <div className="grid lg:grid-cols-2 gap-5 mb-5">
                                <div className="lg:col-span-2">
                                    <InputCustom
                                        type="text"
                                        name="bookTitle"
                                        placeholder="Enter book title"
                                        defaultValue={singleBook.title}
                                    />
                                </div>
                                <div className="lg:col-span-2">
                                    <InputCustom
                                        type="text"
                                        name="coverImage"
                                        placeholder="Enter cover image URL"
                                        defaultValue={singleBook.coverImage}
                                    />
                                </div>
                                <div className="">
                                    <InputCustom
                                        type="number"
                                        name="price"
                                        placeholder="Enter the book price"
                                        defaultValue={singleBook.price}
                                    />
                                </div>
                                <div className="">
                                    <InputCustom
                                        type="text"
                                        name="code"
                                        placeholder="Custom Code/URL"
                                        defaultValue={singleBook.code}
                                    />
                                </div>
                                <div className="">
                                    <InputCustom
                                        type="text"
                                        name="author"
                                        placeholder="Enter the author name"
                                        defaultValue={singleBook.author}
                                    />
                                </div>
                                <div className="">
                                    <InputCustom
                                        type="text"
                                        name="genre"
                                        placeholder="Enter genre"
                                        defaultValue={singleBook.genre}
                                    />
                                </div>
                                <div className="lg:col-span-2">
                                    <InputCustom
                                        type="date"
                                        name="publicationDate"
                                        placeholder="Enter publication date"
                                        defaultValue={
                                            singleBook.publicationDate
                                        }
                                    />
                                </div>
                            </div>
                            <BtnPrimary fullWidth disabled={isLoading}>
                                {isLoading
                                    ? 'Updating book....'
                                    : 'Update book'}
                            </BtnPrimary>
                        </form>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default BookForm;
