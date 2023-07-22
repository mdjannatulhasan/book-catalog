import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
    return <div className="container">{children}</div>;
};

export default Container;
