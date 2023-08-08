/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import SecTitle from '../common/SecTitle';
import { BiPlus } from 'react-icons/bi';
import { useAppSelector } from '@/redux/hook';
import { IBookWithId } from '@/types/homeType';
import { useUpdateReadinglistMutation } from '@/redux/features/wishlist/wishlistApi';
import BtnPrimary from '../common/BtnPrimary';
import { IReadingStatus } from '@/types/globalTypes';

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

    const handleStatusChange = async (
        bookId: string,
        status: IReadingStatus
    ) => {
        await updateReadinglist({
            data: {
                bookId: bookId,
                status: status,
            },
        });

        if (!error && !isLoading) {
            console.log('success');
        }
    };

    return (
        <section className="pb-16 pt-8">
            <div className="container max-w-[800px] mx-auto">
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl">Finished Reading</h3>
                    {!listForm && (
                        <button
                            className="text-lg text-blue-600 flex items-center gap-2"
                            onClick={() => setListForm(true)}
                        >
                            {isLoading ? 'Updating....' : 'Add one '} <BiPlus />
                        </button>
                    )}
                </div>

                <div className="mt-6">
                    <table className="table-auto w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="border py-1 px-2 border-slate-300 text-left">
                                    Bookname
                                </th>
                                <th className="border py-1 px-2 border-slate-300">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {finishedReading?.length ? (
                                finishedReading.map((item, index) => (
                                    <tr key={item._id}>
                                        <td className="py-1 px-2 border border-slate-300">
                                            {index + 1}. {item.title}
                                        </td>
                                        <td className="py-1 text-center px-2 border border-slate-300">
                                            <button
                                                onClick={() =>
                                                    handleStatusChange(
                                                        item._id,
                                                        'REMOVE'
                                                    )
                                                }
                                                className="py-1 px-4 rounded-md bg-[#ffcece]"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        className="py-1 px-2 border border-slate-300"
                                        colSpan={3}
                                    >
                                        No List Yet
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
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
