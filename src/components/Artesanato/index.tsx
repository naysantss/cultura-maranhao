import React from "react";

import styleArtesanato from './Artesenato.module.scss';

import imagemPrincipalArtesanato from '../../assets/images/imagemPrincipalArtesanato.svg'



import GalleryRenda from "../Gallery/Renda";
import GalleryBabacu from "../Gallery/Babacu";
import GalleryTrancado from "../Gallery/Trancado";
import GalleryCeramica from "../Gallery/Ceramica";


export default function Artesanato() {
   return (
      <section className={styleArtesanato.section}>

         <div className={styleArtesanato.page}>
            <div className={styleArtesanato.pageTextLeft}>
               <div className={styleArtesanato.pageTextLeftAlert}>
                  <p>
                     CONHEÇA O ARTESANATO DO
                  </p>
                  <h1>
                     MARANHÃO
                  </h1>
               </div>
               <h1 className={styleArtesanato.pageTextLeftTitle}>
                  A riqueza do artesanato maranhense é um reflexo da criatividade e da herança cultural do estado. Cada peça é uma obra de arte que conta uma história, preservando tradições e celebrando a identidade única do Maranhão.
               </h1>
               <p className={styleArtesanato.pageTextLeftLegend}>
                  O artesanato maranhense é uma expressão vibrante e colorida da cultura local, refletindo a história, a criatividade e as tradições do povo do Maranhão. Utilizando materiais diversos como barro, madeira, palha e tecidos, os artesãos maranhenses criam peças únicas que capturam a essência de sua terra. Aqui estão alguns dos mais destacados artesanatos do Maranhão:
               </p>
            </div>
            <div className={styleArtesanato.pageImageRight}>
               <img src={imagemPrincipalArtesanato} alt="" className={styleArtesanato.pageImageRightImage} />
            </div>
         </div>

         <div className={styleArtesanato.page}>
            <div className={styleArtesanato.pageImageLeft}>
               <h1 className={styleArtesanato.pageImageLeftTitle}>
                  A <strong>Renda de Bilro de Raposa</strong>: a delicadeza e sofisticação das rendas maranhenses
               </h1>
               <div className={styleArtesanato.pageImageLeftImage}>
                  <GalleryRenda />
               </div>

               <h3 className={styleArtesanato.pageImageLeftSubtitle}>
                  Para conhecer mais sobre:
               </h3>

               <p className={styleArtesanato.pageImageLeftLegend}>
                  <a href="https://oimparcial.com.br/cidades/2016/05/rendeiras-de-raposa-resistem-tecendo-a-tradicao/">Tradição das Rendeiras</a> <br />
                  <a href="https://www.youtube.com/watch?v=GGK_donHEow">Raposa e Rendeiras</a> <br />

               </p>
            </div>

            <div className={styleArtesanato.pageTextRight}>
               <p className={styleArtesanato.pageTextRightLegend}>
                  A renda de bilro de Raposa é uma das formas mais delicadas e sofisticadas de artesanato no Maranhão. Feita à mão com fios de algodão ou linho, essa técnica envolve o entrelaçamento cuidadoso de fios usando bilros, resultando em padrões intrincados e belos. A cidade de Raposa é famosa por suas rendeiras, que mantêm viva essa tradição artesanal transmitida por gerações. As rendas são utilizadas para confeccionar roupas, acessórios e itens de decoração, sendo muito valorizadas por sua qualidade e beleza. <br /><br />

                  O processo de produção da renda de bilro é um trabalho meticuloso que requer paciência e habilidade. As artesãs passam horas concentradas, manuseando os bilros com destreza para criar desenhos detalhados e simétricos. Esta dedicação ao ofício resulta em peças que são verdadeiras obras de arte, cada uma com seu próprio charme e caráter único. <br /> <br />

                  A renda de bilro não é apenas um testemunho da habilidade artesanal das mulheres de Raposa, mas também uma importante fonte de sustento para muitas famílias. A venda dessas rendas em mercados locais e feiras de artesanato ajuda a sustentar a economia local e a manter viva uma tradição cultural que é parte integrante da identidade do Maranhão. As peças de renda de bilro são muito procuradas por quem deseja levar consigo uma parte da rica tapeçaria cultural do estado..
               </p>
            </div>
         </div>

         <div className={styleArtesanato.page}>
            <div className={styleArtesanato.pageTextLeft}>

               <h1 className={styleArtesanato.pageTextLeftTitle}>
                  Os <strong>Balaios de Babaçu</strong>: artesanato sustentável e funcional.
               </h1>
               <p className={styleArtesanato.pageTextLeftLegend}>
                  Os balaios de babaçu são uma forma tradicional de artesanato no Maranhão, feitos a partir das fibras da palmeira de babaçu. Esses balaios, cestos e outras peças são não apenas funcionais, mas também esteticamente agradáveis, refletindo a habilidade dos artesãos em transformar materiais naturais em produtos úteis. A produção desses itens é uma prática sustentável, que utiliza recursos renováveis e respeita o meio ambiente. <br /><br />

                  A técnica de produção dos balaios de babaçu envolve a coleta das palhas, que são então secas, tratadas e trançadas manualmente para criar peças resistentes e duráveis. Os balaios são usados para uma variedade de propósitos, desde o armazenamento de alimentos até a decoração de interiores. A versatilidade e a beleza dos balaios fazem deles uma escolha popular tanto entre os locais quanto entre os turistas. <br /><br />

                  Além de sua utilidade prática, os balaios de babaçu representam a cultura e a tradição das comunidades que os produzem. A produção artesanal é muitas vezes uma atividade comunitária, onde o conhecimento é passado de geração em geração. Este artesanato não só preserva técnicas tradicionais, mas também promove a sustentabilidade econômica e ambiental, fortalecendo as comunidades locais e celebrando a riqueza dos recursos naturais do Maranhão.
               </p>
            </div>
            <div className={styleArtesanato.pageImageRight}>
               <div className={styleArtesanato.pageImageRightImage}>
                  <GalleryBabacu />
               </div>
               <div className={styleArtesanato.pageImageRightLegend}>
                  <h3>
                     Para conhecer mais sobre:
                  </h3>
                  <p>
                     <a href="https://www.google.com/imgres?q=artesanato%20balaio%20de%20babacu%20maranhao&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FdyfKooMOqBI%2Fmqdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdyfKooMOqBI&docid=loCgPK7lMvWrrM&tbnid=OJyc7gezjv0sPM&vet=12ahUKEwjElbOGocyHAxXmr5UCHfq4OlgQM3oECHYQAA..i&w=320&h=180&hcb=2&ved=2ahUKEwjElbOGocyHAxXmr5UCHfq4OlgQM3oECHYQAA">Fazendo Balaio</a> <br /><br />

                     <a href="https://www.google.com/imgres?q=artesanato%20balaio%20de%20babacu%20maranhao&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F7YWh2dTo_mQ%2Fmqdefault.jpg&imgrefurl=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3D7YWh2dTo_mQ&docid=Qf4ZyDTb3n2zkM&tbnid=tmfrVfy40idyrM&vet=12ahUKEwjElbOGocyHAxXmr5UCHfq4OlgQM3oECF0QAA..i&w=320&h=180&hcb=2&ved=2ahUKEwjElbOGocyHAxXmr5UCHfq4OlgQM3oECF0QAA">Video - Babaçu é Sustentabilidade</a>
                  </p>
               </div>
            </div>
         </div>

         <div className={styleArtesanato.page}>
            <div className={styleArtesanato.pageImageLeft}>
               <h1 className={styleArtesanato.pageImageLeftTitle}>
                  Os <strong>Trançados de Buriti</strong>: a elegância natural dos trançados maranhenses.
               </h1>
               <div className={styleArtesanato.pageImageLeftImage}>
                  <GalleryTrancado />
               </div>


            </div>

            <div className={styleArtesanato.pageTextRight}>
               <p className={styleArtesanato.pageTextRightLegend}>
                  Os trançados de buriti são uma forma elegante e sustentável de artesanato no Maranhão. Utilizando as fibras da palmeira de buriti, os artesãos criam uma variedade de produtos, desde cestos e bolsas até chapéus e tapetes. A técnica de trançado envolve a preparação cuidadosa das fibras, que são então trançadas à mão para formar peças resistentes e esteticamente agradáveis.<br /><br />

                  O processo de trançado de buriti é um exemplo da habilidade e da paciência dos artesãos maranhenses. Cada peça é trabalhada com atenção aos detalhes, resultando em produtos que são ao mesmo tempo funcionais e decorativos. A beleza natural das fibras de buriti, combinada com a habilidade dos artesãos, faz dos trançados uma escolha popular tanto para uso cotidiano quanto para decoração.<br /><br />

                  Além de sua beleza, os trançados de buriti representam um compromisso com a sustentabilidade e a preservação ambiental. A utilização das fibras de buriti promove a gestão sustentável dos recursos naturais, garantindo que a produção artesanal não comprometa o meio ambiente. Este artesanato é uma celebração da harmonia entre a cultura humana e a natureza, refletindo a rica biodiversidade e a tradição artesanal do Maranhão.
               </p>
            </div>
         </div>

         <div className={styleArtesanato.page}>
            <div className={styleArtesanato.pageTextLeft} >

               <h1 className={styleArtesanato.pageTextLeftTitle} >
                  A <strong>Cerâmica de Alcântara</strong>: uma tradição secular que mantém viva a história e a cultura maranhense.
               </h1>
               <p className={styleArtesanato.pageTextLeftLegend}>
                  A cerâmica de Alcântara é uma das mais representativas do Maranhão, conhecida por sua beleza e detalhamento. As peças são moldadas à mão e queimadas em fornos artesanais, um processo que segue tradições transmitidas por gerações. As cerâmicas incluem vasos, potes, pratos e figuras decorativas, muitas vezes adornadas com motivos que remetem à natureza e à cultura local. A terra de Alcântara, rica em argila, proporciona a matéria-prima perfeita para estas obras de arte. <br /><br />

                  Além de sua funcionalidade, a cerâmica de Alcântara é uma forma de preservar e celebrar a herança cultural do Maranhão. Os artesãos, muitas vezes membros de comunidades tradicionais, utilizam técnicas ancestrais para criar peças que são verdadeiros tesouros culturais. Cada peça de cerâmica carrega consigo uma história e uma conexão profunda com a terra e a história de Alcântara. <br /><br />

                  As cerâmicas de Alcântara são muito procuradas tanto por turistas quanto por colecionadores de arte. Elas não apenas enfeitam ambientes, mas também servem como um lembrete tangível da rica tradição artesanal do Maranhão. Ao adquirir uma peça, os visitantes estão levando consigo um pedaço da cultura maranhense, ajudando a perpetuar uma arte que é fundamental para a identidade do estado.
               </p>
            </div>
            <div className={styleArtesanato.pageImageRight}>
               <div className={styleArtesanato.pageImageRightImage}>
                  <GalleryCeramica />
               </div>
               <div className={styleArtesanato.pageImageRightLegend}>
                  <h3>
                     Para conhecer mais sobre:
                  </h3>
                  <p>
                     <a href="https://conaq.org.br/noticias/artesanato-de-barro-de-mulheres-quilombolas-de-itamatatiua-ma-e-exposto-em-sao-luis/">Cerâmica Quilombo Itamatatiua</a> <br /><br />


                  </p>
               </div>
            </div>
         </div>

      </section>
   )
}