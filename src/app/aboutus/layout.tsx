
import React from 'react';

const AboutUsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div >
            <main>{children}</main>
        </div>
    );
};

export default AboutUsLayout;
