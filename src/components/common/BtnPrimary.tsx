import { ReactNode } from 'react';

export type IButtonType = {
    children: ReactNode;
    type: 'button' | 'submit' | 'reset';
};

const BtnPrimary = ({ children, type }: IButtonType) => {
    return (
        <button
            type={type}
            className=" bg-gradient-to-br from-blue-400 to-blue-600 hover:to-blue-800 text-[white] py-2 px-5 rounded-md max-w-[300px] w-full block font-medium"
        >
            {children}
        </button>
    );
};

export default BtnPrimary;
