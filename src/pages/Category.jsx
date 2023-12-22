import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormCategory from '../components/AddCategory';
import Categories from '../components/Categories';

const Category = () => {

    return (
        <div className='container-main'>
            <Header showButton="category"/>

            <FormCategory />

            <Categories />


            <Footer />
        </div>
    );
};

export default Category;