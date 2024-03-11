import React, { Suspense } from 'react';
const HomePageLazy = React.lazy(() => import('./FAQComponent'));

const FAQPageWrapper = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomePageLazy />
        </Suspense>
    );
};

export default FAQPageWrapper;