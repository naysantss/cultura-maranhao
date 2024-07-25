import React from "react";
import style from '../App.module.scss';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Festas from '../../components/Festas';

function PageFestas() {
   return (
      <div className={style.AppStyle}>
         <Header />
         
         <Festas />
         <Footer />
      </div>
   )
}

export default PageFestas;