import { useState } from 'react';
import AdminPage from './AdminPage';
import UsersPage from './UsersPage';

const MainPage = () => {
    const [admin]=useState(true)
    return (
        <div>
            {
                admin? <AdminPage></AdminPage>:<UsersPage></UsersPage>

            }
        </div>
    );
};

export default MainPage;