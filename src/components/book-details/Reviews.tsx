/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    useGetReviewsQuery,
    useSetReviewsMutation,
} from '@/redux/features/book/bookApi';
import { setLoading, setReview } from '@/redux/features/book/bookSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { FormEvent, useEffect, useState } from 'react';
import InputCustom from '../common/InputCustom';
import { useToast } from '../ui/use-toast';
import { handleLogout } from '@/redux/features/user/userSlice';
import { Skeleton } from '../ui/skeleton';

export default function Reviews({ id }: { id: string }) {
    const dispatch = useAppDispatch();
    const [addReview, setAddReview] = useState(false);
    const { data, isLoading } = useGetReviewsQuery(id);
    const { reviews } = useAppSelector((state) => state.book);
    const { email } = useAppSelector((state) => state.user);

    const { toast } = useToast();

    const [setReviews, { error }] = useSetReviewsMutation();

    useEffect(() => {
        dispatch(setReview(data));
        dispatch(setLoading(isLoading));
    }, [data]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formElement = e.currentTarget as HTMLFormElement;
        const data = {
            book: id,
            reviews: formElement.reviews.value || '#',
        };

        try {
            const response = await setReviews({
                data: data,
            });

            if ('data' in response) {
                toast({
                    variant: 'success',
                    title: 'Review added successfully.',
                    description: '',
                });
                setAddReview(false);
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
                const path =
                    'data' in response.error
                        ? (
                              response.error.data as {
                                  errorMessages: any;
                                  message: string;
                              }
                          )?.errorMessages[0].path
                        : '';

                toast({
                    variant: 'destructive',
                    title: 'Review add Failed.',
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
                title: 'Review add Failed.',
                description: 'There was a problem with your request.',
            });
        }
    };

    return !isLoading ? (
        <div>
            {reviews?.length && (reviews[0] as any)?.reviews?.length ? (
                <ul className="mt-1">
                    {(reviews[0] as any)?.reviews.map(
                        (item: string, index: number) => (
                            <li key={index}>
                                {index + 1}. {item}
                            </li>
                        )
                    )}
                </ul>
            ) : (
                <p className="mt-1">No reviews yet</p>
            )}
            <div>
                {!addReview && email && (
                    <button
                        className="text-blue-800 mt-2 text-sm"
                        onClick={() => setAddReview(true)}
                    >
                        {' '}
                        Add A Review
                    </button>
                )}
            </div>
            {addReview && (
                <form onSubmit={handleSubmit} className="mt-2">
                    <div className="lg:col-span-2">
                        <InputCustom
                            type="text"
                            name="reviews"
                            placeholder="Enter a review"
                        />
                    </div>
                    <button type="submit" className="text-blue-800 mt-2">
                        Submit review
                    </button>
                </form>
            )}
        </div>
    ) : (
        <Skeleton className="h-14 lg:w-[100%] w-[100%]" />
    );
}
