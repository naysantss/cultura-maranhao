
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.scss'; 

import home from '../../assets/images/Home.svg';
import location from '../../assets/images/location.svg';
import party from '../../assets/images/party.svg';
import food from '../../assets/images/food.svg';
import art from '../../assets/images/art.svg';
import code from '../../assets/images/code.svg'

import App from '../../pages/App';
import PageFestas from '../../pages/Festas/Festas';




export default function Navbar() {
  return (
    
    
      <nav className={style.navBar}>
      
      
          <div className={style.navItem}>
            <Link to="/">
            <img src={home} alt="" className={style.navImage} />
            Página Inicial
            </Link>
          </div>
          <div  className={style.navItem}>
            <Link to="/festas">
            <img src={party} alt="" className={style.navImage} />
            Festas Populares
            </Link>
          </div>
          <div className={style.navItem}>
            <Link to="/culinaria">
            <img src={food} alt="" className={style.navImage} />
            Culinária
            </Link>
          </div>
          <div className={style.navItem}>
            <Link to="/artesanato" >
            <img src={art} alt="" className={style.navImage} />
            Artesanato
            </Link>
          </div>
          <div className={style.navItem}>
            <Link to="/pontos-turisticos" >
            <img src={location} alt="" className={style.navImage} />
            Pontos Turísticos
            </Link>
          </div>
          <div className={style.navItem}>
            <Link to="/sobre" >
            <img src={code} alt="" className={style.navImage} />
            Sobre Nós
            </Link>
          </div>

          
      </nav>
      
    
  );
};


