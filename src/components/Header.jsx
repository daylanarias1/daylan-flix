import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

const HeaderNav = ({ showButton }) => {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <header>
      <nav>
        <Link to="/">      <img src={Logo} alt="DAYLANFLIX" width="200px" height="60px" /></Link>



        {showButton === 'home' && <Link to="/video" className='btn btn-primary'>Nuevo Video</Link>}
        {showButton === 'video' && <Link to="/Category" className='btn btn-primary'>Nueva categoría</Link>}
        {showButton === 'category' && <Link to="/video" className='btn btn-primary'>Nuevo Video</Link>}
        {showButton === 'notfound' && <button className='btn btn-primary' onClick={handleGoBack}>Atras</button>}
      </nav>
    </header>
  );
};

export default HeaderNav;