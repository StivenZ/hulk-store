import React from 'react';
import Layout from '../components/Layout/Layout';
import Navbar from '../components/Navbar/Navbar';
import LoginAdmin from '../components/Admin/LoginAdmin';

function AdminPage () {
    return (
        <React.Fragment>
            <Layout>
                <LoginAdmin />
            </Layout>
        </React.Fragment>
    )
}

export default AdminPage;