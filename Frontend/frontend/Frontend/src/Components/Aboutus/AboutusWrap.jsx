import React, { Suspense } from 'react';
const HomePageLazy = React.lazy(() => import('./Aboutus'));

const AboutusPageWrapper = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomePageLazy />
        </Suspense>
    );
};

export default AboutusPageWrapper;