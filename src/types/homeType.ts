export type IBook = {
    code?: string;
    title: string;
    coverImage: string;
    price: number;
    genre: string;
    author?: string;
    publicationDate?: string;
    reviews?: string[];
};
export type IBookWithId = IBook & {
    _id: string;
};
