import React, { Suspense } from 'react';
const AdminCompanyPageLazy = React.lazy(() => import('./AdminCompany'));

const AdminCompanyPageWrapper = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AdminCompanyPageLazy />
        </Suspense>
    );
};

export default AdminCompanyPageWrapper;