
import React from "react";
import style from './Header.module.scss';

import logo from '../../assets/images/logoPrincipalGrande.png';


export default function Header() {

      return (
            <header className={style.header}>
                  <div className={style.headerLogo}>
                        <img src={logo} alt=""  className={style.headerLogoImage}/>
                  </div>
                  
            </header>
      )

}