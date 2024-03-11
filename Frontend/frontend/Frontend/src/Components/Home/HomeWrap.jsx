import React, { Suspense } from 'react';
const HomePageLazy = React.lazy(() => import('./Home'));

const HomePageWrapper = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomePageLazy />
        </Suspense>
    );
};

export default HomePageWrapper;