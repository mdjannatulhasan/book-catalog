import { ReactNode } from 'react';

const SecTitle = ({ children }: { children: ReactNode }) => {
    return <h2 className="text-4xl font-medium text-blue-950">{children}</h2>;
};

export default SecTitle;
