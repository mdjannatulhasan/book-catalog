/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import SecTitle from '../common/SecTitle';
import { BiPlus } from 'react-icons/bi';
import { useAppSelector } from '@/redux/hook';
import { IBookWithId } from '@/types/homeType';
import { useUpdateReadinglistMutation } from '@/redux/features/wishlist/wishlistApi';
import BtnPrimary from '../common/BtnPrimary';

const FinishedReading = ({ books }: { books: any }) => {
    const [listForm, setListForm] = useState<boolean>(false);
    const { finishedReading } = useAppSelector((state) => state.wishlist);
    const [updateReadinglist, { error, isLoading }] =
        useUpdateReadinglistMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setListForm(false);
        const formElement = e.currentTarget as HTMLFormElement;
        const data = {
            bookId: formElement.bookId.value,
            status: formElement.status.value,
        };

        await updateReadinglist({
            data: data,
        });

        if (!error && !isLoading) {
            console.log('success');
        }
    };

    return (
        <section className="pb-16 pt-8">
            <div className="container max-w-[800px] mx-auto">
                <div className="flex justify-between items-center">
                    <SecTitle>Finished Reading</SecTitle>
                    {!listForm && (
                        <button
                            className="text-xl text-blue-600 flex items-center gap-2"
                            onClick={() => setListForm(true)}
                        >
                            Add one <BiPlus />
                        </button>
                    )}
                </div>

                <div className="mt-6">
                    <ul>
                        {finishedReading?.length
                            ? finishedReading.map((item, index) => (
                                  <li key={index} className="text-xl my-2">
                                      {index + 1}. {item.title}
                                  </li>
                              ))
                            : 'No List Yet'}
                    </ul>
                </div>
                {listForm && (
                    <form onSubmit={handleSubmit} className="mt-6">
                        <div className="flex gap-3 flex-col">
                            <select
                                name="bookId"
                                id=""
                                className="cursor-pointer border  border-slate-200 px-4 py-2 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                            >
                                <option>Please Select one</option>
                                {books.data &&
                                    books.data.map((item: IBookWithId) => (
                                        <option value={item._id} key={item._id}>
                                            {item.title}
                                        </option>
                                    ))}
                            </select>
                            <input
                                name="status"
                                type="text"
                                className="hidden"
                                value="COMPLETED_READING"
                            />
                            <BtnPrimary type="submit">Add</BtnPrimary>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
};

export default FinishedReading;
