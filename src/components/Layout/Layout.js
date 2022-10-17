import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageHeader } from '../PageHeader';

export function Layout() {
    return (
        <div>
            <PageHeader />
            <main>
                <Outlet />
            </main>
        </div>
    );
}
