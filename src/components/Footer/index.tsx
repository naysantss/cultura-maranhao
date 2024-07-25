import React from "react";

import style from './Footer.module.scss';

import logoAlura from '../../assets/images/logoAlura.svg';
import logoInova from '../../assets/images/logoInova.svg';

export default function Footer() {
   return(
      <div className={style.footer}>
         <div className={style.footerLogo}>
            <img src={logoAlura} alt="" className={style.footerLogoImage}/>
         </div>
         <div className={style.footerText}>
            <h1  className={style.footerTextTitle}>
               Site desenvolvido por trilheiros do programa Trilhas Inova.
            </h1>
         </div>
         <div className={style.footerLogo}>
            <img src={logoInova} alt="" className={style.footerLogoImage}/>
         </div>
      </div>
   )
}