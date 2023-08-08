import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export type IButtonType = {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    fullWidth?: boolean;
    link?: boolean;
    to?: string;
    disabled?: boolean;
};

const BtnPrimary = ({
    children,
    type,
    fullWidth,
    link,
    to = '',
    disabled,
}: IButtonType) => {
    return link ? (
        <Link
            to={to}
            className={`bg-gradient-to-br from-blue-400 to-blue-600 hover:to-blue-800 text-[white] py-2 px-5 rounded-md text-center ${
                !fullWidth && 'max-w-[300px]'
            } w-full block font-medium`}
        >
            {children}
        </Link>
    ) : (
        <button
            disabled={disabled}
            type={type}
            className={`bg-gradient-to-br from-blue-400 to-blue-600 hover:to-blue-800 text-[white] py-2 px-5 rounded-md ${
                !fullWidth && 'max-w-[300px]'
            } w-full block font-medium ${disabled && 'cursor-not-allowed'}`}
        >
            {children}
        </button>
    );
};

export default BtnPrimary;
