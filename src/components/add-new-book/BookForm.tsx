/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent } from 'react';
import BtnPrimary from '../common/BtnPrimary';
import Container from '../common/Container';
import InputCustom from '../common/InputCustom';
import SecTitle from '../common/SecTitle';
import { useCreateBookMutation } from '@/redux/features/book/bookApi';
import { useToast } from '../ui/use-toast';
import { useAppDispatch } from '@/redux/hook';
import { handleLogout } from '@/redux/features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const BookForm = () => {
    const [createBook, { error, isLoading }] = useCreateBookMutation();
    const { toast } = useToast();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formElement = e.currentTarget as HTMLFormElement;
        const data = {
            code: formElement.code.value || '#',
            coverImage: formElement.coverImage.value || '#',
            title: formElement.title.value,
            price: parseFloat(formElement.price.value),
            author: formElement.author.value,
            genre: formElement.genre.value,
            publicationDate: formElement.publicationDate.value,
        };

        try {
            const response = await createBook({
                data: data,
            });

            if ('data' in response) {
                toast({
                    variant: 'success',
                    title: 'Book added successfully.',
                    description: '',
                });
                navigate('/books');
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
                    title: 'Book creation Failed.',
                    description: `${errorMessage}${
                        response.error.status != 401 ? `- ${errorMessages}` : ''
                    } ${path && `'in' ${path}`}`,
                });
                if (response.error.status == 401) {
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
                    <SecTitle>Add a book</SecTitle>
                </div>
                <div className="shadow p-8 max-w-4xl mx-auto">
                    <form id="bookForm" onSubmit={handleSubmit}>
                        <div className="grid lg:grid-cols-2 gap-5 mb-5">
                            <div className="lg:col-span-2">
                                <InputCustom
                                    type="text"
                                    name="title"
                                    placeholder="Enter book title"
                                />
                            </div>
                            <div className="lg:col-span-2">
                                <InputCustom
                                    type="text"
                                    name="coverImage"
                                    placeholder="Enter cover image URL"
                                />
                            </div>
                            <div className="">
                                <InputCustom
                                    type="number"
                                    name="price"
                                    placeholder="Enter the book price"
                                    defaultValue={0}
                                />
                            </div>
                            <div className="">
                                <InputCustom
                                    type="text"
                                    name="code"
                                    placeholder="Custom Code/URL"
                                />
                            </div>
                            <div className="">
                                <InputCustom
                                    type="text"
                                    name="author"
                                    placeholder="Enter the author name"
                                />
                            </div>
                            <div className="">
                                <InputCustom
                                    type="text"
                                    name="genre"
                                    placeholder="Enter genre"
                                />
                            </div>
                            <div className="lg:col-span-2">
                                <InputCustom
                                    type="date"
                                    name="publicationDate"
                                    placeholder="Enter publication date"
                                />
                            </div>
                        </div>
                        <BtnPrimary fullWidth disabled={isLoading}>
                            {isLoading ? 'Adding book....' : 'Add book'}
                        </BtnPrimary>
                    </form>
                </div>
            </Container>
        </section>
    );
};

export default BookForm;
