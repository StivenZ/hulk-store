import React from 'react';
import Layout from '../components/Layout/Layout';
import Navbar from '../components/Navbar/Navbar';

function HomePage () {
    return (
        <React.Fragment>
            <Layout>
                <div className='box'>
                    <p>HomePage</p>
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default HomePage;