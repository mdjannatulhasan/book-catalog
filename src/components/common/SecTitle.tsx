import { ReactNode } from 'react';

const SecTitle = ({ children }: { children: ReactNode }) => {
    return (
        <h2 className="lg:text-4xl text-2xl font-medium text-blue-950">
            {children}
        </h2>
    );
};

export default SecTitle;
