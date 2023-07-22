import { ReactNode } from 'react';

const SubTitle = ({
    children,
    center,
}: {
    children: ReactNode;
    center: boolean;
}) => {
    return (
        <p
            className={`text-xl text-blue-950 max-w-3xl ${
                center && 'text-center'
            }`}
        >
            {children}
        </p>
    );
};

export default SubTitle;
