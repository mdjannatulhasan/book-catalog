import { IButtonType } from './BtnPrimary';

const BtnOutline = ({ children, type }: IButtonType) => {
    return (
        <button
            type={type}
            className="hover:bg-gradient-to-br from-blue-400 to-blue-600 text-[white] py-2 px-5 rounded-md max-w-[500px] w-full block"
        >
            {children}
        </button>
    );
};

export default BtnOutline;
