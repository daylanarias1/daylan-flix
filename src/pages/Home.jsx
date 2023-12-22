import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { obtenerCategorias, obtenerVideos } from '../services/Api';
import CategoryList from '../components/CategoryList';

const Home = () => {

    const [categories, setCategories] = useState([]);
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const categoriesResponse = await obtenerCategorias();
                setCategories(categoriesResponse);
    
                const videosResponse = await obtenerVideos();
                setVideos(videosResponse);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    
        fetchData();
    }, []);
    

    return (
        <div className='container-main'>
          <Header showButton="home" />
      
          <main>
          {categories.map((category) => (
            <CategoryList key={category.id} categoria={category} videos={videos} />
          ))}
          </main>
      
          <Footer />
        </div>
        
      );
};

export default Home;