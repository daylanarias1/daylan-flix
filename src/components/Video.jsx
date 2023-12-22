// Video.js
import React from 'react';

const Video = ({ video }) => {
  return (
    <div className="video">
    <img src={video.linkImagen} style={{ width: '500px', height: '300px' }} alt="Descripción de la imagen" />
    </div>
  );
};

export default Video;