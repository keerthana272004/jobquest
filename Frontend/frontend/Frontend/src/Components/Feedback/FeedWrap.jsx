import React, { Suspense } from 'react';
const HomePageLazy = React.lazy(() => import('./FeedBack'));

const FeedPageWrapper = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomePageLazy />
        </Suspense>
    );
};

export default FeedPageWrapper;