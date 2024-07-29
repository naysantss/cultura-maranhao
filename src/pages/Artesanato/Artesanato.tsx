import React from 'react';
import Header from '../../components/Header'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Home from '../../components/Home';
import Festas from '../../components/Festas';
import PontosTuristicos from '../../components/PontosTuristicos';
import Culinaria from '../../components/Culinaria';
import Artesanato from '../../components/Artesanato';

import style from './App.module.scss';
function PageArtesanato() {
   return (
      <div className={style.AppStyle}>
         <Header />
         <Navbar />
         <Artesanato />
         <Footer />
      </div>
   )
}

export default PageArtesanato;