import React, { useState } from 'react';
import { registrarCategoria } from '../services/Api';

const FormCategory = () => {
    const [categoria, setCategoria] = useState({
        nombre: '',
        descripcion: '',
        color: '#000000',
        codigo: '',
        id: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registrarCategoria(categoria);
        limpiar();
    };

    const limpiar = () => {
        setCategoria({
            nombre: '',
            descripcion: '',
            color: '#000000',
            codigo: '',
            id: ''
        });
    }

    const handleChange = (field, value) => {
        setCategoria((prevCategoria) => ({
            ...prevCategoria,
            [field]: value,
        }));
    };

    return (
        <form onSubmit={handleSubmit} className='form-add'>
            <h1>Agregar categoría</h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder=''
                    value={categoria.nombre}
                    onChange={(e) => handleChange('nombre', e.target.value)}
                />
                <label className="input-label">Nombre de categoría</label>
            </div>

            <div className="input-container">
                <textarea
                    placeholder=''
                    value={categoria.descripcion}
                    onChange={(e) => handleChange('descripcion', e.target.value)}
                ></textarea>
                <label className="input-label">Descripcion de la categoría</label>
            </div>

            <div className="input-container">
                <input
                    className='campo-color'
                    type="color"
                    value={categoria.color}
                    onChange={(e) => handleChange('color', e.target.value)}
                />
                <label className="input-label">Color de la categoría</label>
            </div>

            <div className="input-container">
                <input
                    type="number"
                    placeholder=''
                    value={categoria.codigo}
                    onChange={(e) => handleChange('codigo', e.target.value)}
                />
                <label className="input-label">Codigo de seguridad</label>
            </div>

            <div className='group-video'>
                <button className='btn btn-primary' type="submit">
                    Agregar categoría
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

export default FormCategory;
