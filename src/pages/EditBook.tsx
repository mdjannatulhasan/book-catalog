import BookForm from '@/components/edit-book/BookForm';
import Hero from '@/components/edit-book/Hero';
import { useGetSingleBookQuery } from '@/redux/features/book/bookApi';
import { setLoading, setSingleBook } from '@/redux/features/book/bookSlice';
import { useAppDispatch } from '@/redux/hook';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditBook = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const { data, isLoading } = useGetSingleBookQuery(id);

    useEffect(() => {
        dispatch(setSingleBook(data));
        dispatch(setLoading(isLoading));
    }, [data]);

    return (
        <>
            <Hero />
            <BookForm />
        </>
    );
};

export default EditBook;
