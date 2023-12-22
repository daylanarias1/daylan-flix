
import React, { useRef, useEffect } from 'react';
import Video from '../components/Video';

const CategoryList = ({ categoria, videos }) => {

  const videosWrapper = useRef(null);
  const prevButton = useRef(null);
  const nextButton = useRef(null);

  const itemWidth = 800;

  const filteredVideos = videos.filter(video => video.codigoCategoria === categoria.codigo);

 
  const scrollVideos = (direction) => {
    let scrollPosition = videosWrapper.current.scrollLeft;
     // Considera el ancho del elemento y su margen
    scrollPosition += direction * itemWidth;
 
    videosWrapper.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth' // Agrega el comportamiento suave
    });
 
    let isAtRightLimit = scrollPosition + videosWrapper.current.clientWidth >= videosWrapper.current.scrollWidth;
    let isAtLeftLimit = scrollPosition <= 0;
 
    prevButton.current.style.visibility = isAtLeftLimit ? 'hidden' : 'visible';
    nextButton.current.style.visibility = isAtRightLimit ? 'hidden' : 'visible';
  }
 
  useEffect(() => {
    prevButton.current.style.visibility = 'hidden';

    let scrollPosition = videosWrapper.current.scrollLeft;

    scrollPosition += 1 * itemWidth;

    let isAtRightLimit = scrollPosition + videosWrapper.current.clientWidth >= videosWrapper.current.scrollWidth;

    nextButton.current.style.visibility = isAtRightLimit ? 'hidden' : 'visible';
  }, []);
 
  return (
    
    <div className="category-container">
      <div className="category-header">
        <h1 className="category-tile"  style={{ backgroundColor: categoria.color }}>{categoria.nombre}</h1>
        <p>{categoria.descripcion}</p>
      </div>
      <div className="carousel-container">
        <button className="carousel-button prev-button" onClick={() => scrollVideos(-1)} ref={prevButton}>
          {'<'}
        </button>
        <div className="video-container" ref={videosWrapper}>
          {filteredVideos.map((video) => (
            <Video key={video.id} video={video} />
          ))}
        </div>
        <button className="carousel-button next-button" onClick={() => scrollVideos(1)} ref={nextButton}>
          {'>'}
        </button>
      </div>
    </div>
  );
 };
export default CategoryList;