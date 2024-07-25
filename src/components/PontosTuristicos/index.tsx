import React from "react";

import stylePontos from './PontosTuristicos.module.scss';
import imagemPrincipalFestas from '../../assets/images/imagemPrincipalFestas.svg'




import GalleryLencoisMaranhenses from "../Gallery/LencoisMaranhenses";
import GalleryCentroHistorico from "../Gallery/CentroHistorico";
import GalleryAlcantara from "../Gallery/Alcantara";
import GalleryChapadaMesas from "../Gallery/ChapadaMesas";
import Map from '../Map';

export default function PontosTuristicos() {
   return (
      <section className={stylePontos.section}>

         <div className={stylePontos.page}>
            <div className={stylePontos.pageTextLeft}>
               <div className={stylePontos.pageTextLeftAlert}>
                  <p>
                  CONHEÇA OS PONTOS TURÍSTICOS DO
                  </p>
                  <h1>
                  MARANHÃO
                  </h1>
               </div>
               <h1 className={stylePontos.pageTextLeftTitle}>
               Explorar os pontos turísticos do Maranhão é mergulhar em uma jornada de beleza natural e riqueza histórica.
               </h1>
               <p className={stylePontos.pageTextLeftLegend}>
               Os Lençóis Maranhenses, com suas paisagens deslumbrantes e lagoas encantadoras; o Centro Histórico de São Luís, com sua arquitetura colonial e ruas de paralelepípedos; e Alcântara, uma cidade histórica com ruínas fascinantes e vista deslumbrante, são paradas obrigatórias. Cada destino revela a herança cultural e a beleza única do Maranhão.
               </p>
            </div>
            <div className={stylePontos.pageImageRight}>
               <Map />
            </div>
         </div>

         <div className={stylePontos.page}>
            <div className={stylePontos.pageImageLeft}>
               <h1 className={stylePontos.pageImageLeftTitle}>
                  Os <strong>Lençóis Maranhenses</strong>: uma das maravilhas naturais mais impressionantes do Brasil.
               </h1>
               <div className={stylePontos.pageImageLeftImage}>
                  <GalleryLencoisMaranhenses />
               </div>

               <h3 className={stylePontos.pageImageLeftSubtitle}>
                  Para conhecer mais sobre:
               </h3>

               <p className={stylePontos.pageImageLeftLegend}>
                  <a href="https://www.icmbio.gov.br/parnalencoismaranhenses/guia-do-visitante.html">Site do ICMBio</a> <br />
                  <a href="https://turismo.ma.gov.br/programas-ou-campanhas/lencois-maranhenses">Site da Secretaria de Turismo do MA</a> <br />
                  <a href="https://youtu.be/7Ikc0bRgwHw?si=gG7ztvnm3n0x4D3Q0">Vídeo do Youtube</a> <br />
               </p>
            </div>

            <div className={stylePontos.pageTextRight}>
               <p className={stylePontos.pageTextRightLegend}>
               Situado no litoral nordeste do Maranhão, o Parque Nacional dos Lençóis Maranhenses é famoso por suas vastas dunas de areia branca e lagoas de água cristalina que se formam durante a temporada de chuvas. É um destino perfeito para os amantes da natureza e aventura, oferecendo atividades como caminhadas, passeios de jipe e banhos refrescantes nas lagoas. A paisagem única, que lembra um deserto com oásis, é um espetáculo natural que encanta a todos os visitantes. <br /><br />

               Os Lençóis Maranhenses abrigam também uma rica biodiversidade, incluindo espécies de aves migratórias que utilizam as lagoas como ponto de descanso. As pequenas vilas de pescadores na região, como Atins e Santo Amaro, proporcionam uma experiência autêntica e tranquila, onde os visitantes podem se hospedar em pousadas rústicas, saborear a culinária local e interagir com os moradores que conhecem intimamente cada canto do parque.
               </p>
            </div>
         </div>

         <div className={stylePontos.page}>
            <div className={stylePontos.pageTextLeft}>

               <h1 className={stylePontos.pageTextLeftTitle}>
                  O <strong>Centro Histórico de São Luís</strong>: um tesouro colonial e cultural.
               </h1>
               <p className={stylePontos.pageTextLeftLegend}>
               A capital do Maranhão, São Luís, possui um centro histórico declarado Patrimônio Mundial pela UNESCO. Com seus casarões coloniais, igrejas antigas e ruas de paralelepípedos, São Luís oferece uma viagem no tempo. Além da arquitetura preservada, o centro histórico é um vibrante centro cultural, com festivais de música, dança e gastronomia que refletem a rica herança multicultural da cidade. <br /><br />

               O Centro Histórico de São Luís também abriga museus, como o Museu Histórico e Artístico do Maranhão e o Museu de Artes Visuais, que exibem artefatos e obras de arte que contam a história da região. As casas de azulejos, característica marcante da arquitetura local, são uma atração à parte, com suas fachadas coloridas e detalhadas. Além disso, o centro é palco de diversas manifestações culturais e artísticas, como o tambor de crioula e o bumba meu boi, que animam as ruas com seus ritmos e cores.
               </p>
            </div>
            <div className={stylePontos.pageImageRight}>
               <div className={stylePontos.pageImageRightImage}>
                  <GalleryCentroHistorico />
               </div>
               <div className={stylePontos.pageImageRightLegend}>
                  <h3>
                     Para conhecer mais sobre:
                  </h3>
                  <p>
                     <a href="https://cidades.ibge.gov.br/brasil/ma/sao-luis/historico">Site do IBGE</a> <br /><br />

                     <a href="https://www.youtube.com/watch?v=HsklOjpnaUo">Vídeo do Youtube</a>
                  </p>
               </div>
            </div>
         </div>

         <div className={stylePontos.page}>
            <div className={stylePontos.pageImageLeft}>
               <h1 className={stylePontos.pageImageLeftTitle}>
                  <strong>Alcântara</strong>: história e encanto em cada esquina.
               </h1>
               <div className={stylePontos.pageImageLeftImage}>
                  <GalleryAlcantara />
               </div>


            </div>

            <div className={stylePontos.pageTextRight}>
               <p className={stylePontos.pageTextRightLegend}>
               A cidade histórica de Alcântara, localizada a uma curta distância de barco de São Luís, é um lugar onde o tempo parece ter parado. Com suas ruínas de igrejas, casarões coloniais e ruas tranquilas, Alcântara oferece uma imersão na história do Maranhão. A cidade é conhecida por suas festividades tradicionais e sua vista deslumbrante do litoral, tornando-se um destino imperdível para os apreciadores de cultura e história.<br /><br />

                  Além das ruínas históricas, Alcântara é famosa por seu folclore e tradições vivas. Durante a Festa do Divino Espírito Santo, a cidade se transforma com procissões, danças e celebrações que atraem visitantes de todas as partes. A culinária local também é um destaque, com pratos típicos como a torta de camarão e o arroz de cuxá, que refletem a mistura de influências indígenas, africanas e portuguesas. Passeios de barco pela baía de São Marcos proporcionam vistas panorâmicas e a oportunidade de observar a vida marinha local, como golfinhos e aves costeiras.
               </p>
            </div>
         </div>

         <div className={stylePontos.page}>
            <div className={stylePontos.pageTextLeft} >

               <h1 className={stylePontos.pageTextLeftTitle} >
                  A <strong>Chapada das Mesas</strong>: natureza exuberante e aventuras.
               </h1>
               <p className={stylePontos.pageTextLeftLegend}>
               Localizada no sul do Maranhão, a Chapada das Mesas é um paraíso para os aventureiros e amantes da natureza. Com suas formações rochosas impressionantes, cachoeiras de águas cristalinas e trilhas desafiadoras, a região oferece inúmeras oportunidades para exploração e aventura. O parque é um refúgio de biodiversidade, onde é possível apreciar a flora e fauna locais em um cenário de tirar o fôlego.<br /><br />
               A Chapada das Mesas é lar de cachoeiras espetaculares, como a Cachoeira de Santa Bárbara e a Cachoeira do Santuário, que oferecem locais perfeitos para banhos refrescantes e contemplação da natureza. As trilhas para chegar a esses pontos variam em dificuldade, permitindo que visitantes de todos os níveis de condicionamento físico possam aproveitar a beleza natural. Além das cachoeiras, as formações rochosas, como a Pedra Caída e o Portal da Chapada, são atrações imperdíveis que proporcionam vistas panorâmicas e oportunidades para fotografia. A região também abriga pousadas e eco-resorts que oferecem acomodações confortáveis e atividades ao ar livre, como passeios a cavalo e observação de aves.<br /><br />
                  
               </p>
            </div>
            <div className={stylePontos.pageImageRight}>
               <div className={stylePontos.pageImageRightImage}>
                  <GalleryChapadaMesas />
               </div>
               <div className={stylePontos.pageImageRightLegend}>
                  <h3>
                     Para conhecer mais sobre:
                  </h3>
                  <p>
                     <a href="https://turismo.ma.gov.br/programas-ou-campanhas/chapada-das-mesas">Site da Secretaria de Turismo do MA</a> <br /><br />

                     <a href="https://youtu.be/aT2N8JF70GI?si=2Bhkx-PxH2HsL0E6">Vídeo do Youtube</a>
                  </p>
               </div>
            </div>
         </div>

      </section>
   )
}