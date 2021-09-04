import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import SearchBar from '../components/SearchBar/SearchBar';
import ItemsBox from '../components/ItemsBox/ItemsBox';
import Layout from '../components/Layout/Layout';

function VendorPage (props) {
    return (
        <React.Fragment>
            <Layout>
                <SearchBar />
                <ItemsBox />
            </Layout>
        </React.Fragment>
    )
}

export default VendorPage;