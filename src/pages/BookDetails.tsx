import BookDetailsSection from '@/components/book-details/BookDetailsSection';
import Hero from '@/components/book-details/Hero';
import { useGetSingleBookQuery } from '@/redux/features/book/bookApi';
import { setLoading, setSingleBook } from '@/redux/features/book/bookSlice';
import { useAppDispatch } from '@/redux/hook';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const { data, isLoading } = useGetSingleBookQuery(id);

    useEffect(() => {
        dispatch(setSingleBook(data));
        dispatch(setLoading(isLoading));
    }, [data]);

    return (
        <>
            <BookDetailsSection />
        </>
    );
};

export default BookDetails;
