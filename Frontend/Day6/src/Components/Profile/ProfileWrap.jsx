import React, { Suspense } from 'react';
const ProfilePageLazy = React.lazy(() => import('./Profile'));

const ProfilePageWrapper = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProfilePageLazy />
        </Suspense>
    );
};

export default ProfilePageWrapper;