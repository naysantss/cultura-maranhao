import React from "react";
import imagemPrincipal from '../../assets/images/imagemPrincipal.svg';

import style from './Home.module.scss';

export default function Home() {
   return(
      <main className={style.main}>
         <div className={style.mainText}>
            <h2 className={style.mainTextAlert}>
            VENHA CONHECER O MARANHÃO!
            </h2>

            <h1 className={style.mainTextTitle}>
            Festas populares encantadoras, culinária maravilhosa, lindo artesanato e pontos turísticos surreais.
            </h1>

            <p  className={style.mainTextLegend}>
            Conhecer a cultura do Maranhão é uma viagem rica e diversificada que encanta os sentidos. Desde suas festas populares, como o Bumba Meu Boi até o tambor de crioula, a herança cultural maranhense é vibrante e única. A gastronomia é maravilhosa e explorar os locais turísticos proporciona uma imersão profunda na história e beleza natural do estado. Cada canto do Maranhão guarda uma história, um sabor e uma paisagem que revelam a riqueza cultural e natural desse estado fascinante.
            </p>
         </div>
         <div className={style.mainImage}>
            <img src={imagemPrincipal} alt=""  className={style.mainImagePicture}/>
         </div>
      </main>
   )

}