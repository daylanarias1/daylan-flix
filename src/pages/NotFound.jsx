import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
    const headingStyle = {
        color: 'white'
    };

    return (
        <div>
            <Header showButton="notfound"/>
            <h1 style={headingStyle}>404</h1>
            <Footer />
        </div>
    );
};

export default NotFound;
