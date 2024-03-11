import React, { Suspense } from 'react';
const HomePageLazy = React.lazy(() => import('./PrivacyPolicy'));

const PrivacyPageWrapper = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomePageLazy />
        </Suspense>
    );
};

export default PrivacyPageWrapper;