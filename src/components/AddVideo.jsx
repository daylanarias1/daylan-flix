import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { obtenerCategorias, registrarVideo } from '../services/Api';

const AddVideo = () => {

  const [video, setVideo] = useState({
    titulo: '',
    linkVideo: '',
    linkImagen: '',
    codigoCategoria: '',
    descripcion: '',
    codigo: '',
    id: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registrarVideo(video);
    limpiar();
  };

  const limpiar = () => {
    setVideo({
      titulo: '',
      linkVideo: '',
      linkImagen: '',
      codigoCategoria: '',
      descripcion: '',
      codigo: '',
      id: '',
    });
  };

  const handleChange = (field, value) => {
    setVideo((prevVideo) => ({
      ...prevVideo,
      [field]: value,
    }));
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await obtenerCategorias();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <form onSubmit={handleSubmit} className='form-add'>
      <h1>Agregar video</h1>


      <div className="input-container">
        <input
          type="text"
          placeholder=''
          value={video.titulo}
          onChange={(e) => handleChange('titulo', e.target.value)}
        />
        <label className="input-label">Título del video</label>
      </div>



      <div className="input-container">
        <input
          type="text"
          placeholder=''
          value={video.linkVideo}
          onChange={(e) => handleChange('linkVideo', e.target.value)}
        />
        <label className="input-label">Enlace del video</label>
      </div>


      <div className="input-container">
        <input
          type="text"
          placeholder=''
          value={video.linkImagen}
          onChange={(e) => handleChange('linkImagen', e.target.value)}
        />
        <label className="input-label">Enlace de la Imagen</label>
      </div>


      <div className="input-container">
        <select
          name="categoria"
          id="categoria"
          value={video.codigoCategoria}
          onChange={(e) => handleChange('codigoCategoria', e.target.value)}
        >
          <option value="" disabled >
            Seleccione una categoría
          </option>
          {categories.map((categoria) => (
            <option key={categoria.id} value={categoria.codigo}>
              {categoria.nombre}
            </option>
          ))}
        </select>
      </div>



      <div className="input-container">
      <textarea
        placeholder=''
        value={video.descripcion}
        onChange={(e) => handleChange('descripcion', e.target.value)}
      ></textarea>
        <label className="input-label">Descripción del video</label>
      </div>

      <div className="input-container">
      <input
        type="text"
        placeholder=''
        value={video.codigo}
        onChange={(e) => handleChange('codigo', e.target.value)}
      />
        <label className="input-label">Código del video</label>
      </div>


      <div className='group-video'>
        <button className='btn btn-primary' type="submit">
          Agregar video
        </button>
        <button
          className='btn btn-secondary'
          type="button"
          onClick={limpiar}
        >
          Limpiar
        </button>
      </div>
    </form>
  );
};

export default AddVideo;
