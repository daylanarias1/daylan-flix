import React, { useEffect } from 'react';
import Header from '../components/Header';
import AddVideo from '../components/AddVideo';
import Footer from '../components/Footer';

const Category = () => {

    return (
        <div className='container-main'>
            <Header showButton="video"/>


            <AddVideo />


            <Footer />
        </div>
    );
};

export default Category;