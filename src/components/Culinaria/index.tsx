import React from "react";

import stylePontos from './Culinaria.module.scss';

import imagemPrincipalCulinaria from '../../assets/images/imagemPrincipalCulinaria.svg'



import GalleryArrozCuxa from "../Gallery/ArrozCuxa";
import GalleryTortaCamarao from "../Gallery/TortaCamarao";
import GalleryCaruru from "../Gallery/Caruru";
import GalleryGuaranaJesus from "../Gallery/GuaranaJesus";


export default function Culinaria() {
   return (
      <section className={stylePontos.section}>

         <div className={stylePontos.page}>
            <div className={stylePontos.pageTextLeft}>
               <div className={stylePontos.pageTextLeftAlert}>
                  <p>
                  CONHEÇA A CULINÁRIA DO
                  </p>
                  <h1>
                  MARANHÃO
                  </h1>
               </div>
               <h1 className={stylePontos.pageTextLeftTitle}>
               A culinária do Maranhão é um convite a explorar sabores únicos e memoráveis, que contam histórias de um povo rico em cultura e tradição.
               </h1>
               <p className={stylePontos.pageTextLeftLegend}>
               A culinária do Maranhão é uma verdadeira festa para os sentidos, combinando sabores, aromas e cores de maneira única e deliciosa. Influenciada pelas culturas indígena, africana e portuguesa, a gastronomia maranhense é rica e diversificada, refletindo a história e a tradição do estado. Aqui estão alguns dos pratos e ingredientes que tornam a culinária maranhense tão especial:
               </p>
            </div>
            <div className={stylePontos.pageImageRight}>
               <img src={imagemPrincipalCulinaria} alt=""  className={stylePontos.pageImageRightImage}/>
            </div>
         </div>

         <div className={stylePontos.page}>
            <div className={stylePontos.pageImageLeft}>
               <h1 className={stylePontos.pageImageLeftTitle}>
                  O <strong>Arroz de Cuxá</strong>: um dos pratos mais tradicionais e emblemáticos do Maranhão.
               </h1>
               <div className={stylePontos.pageImageLeftImage}>
                  <GalleryArrozCuxa />
               </div>

               <h3 className={stylePontos.pageImageLeftSubtitle}>
                  Para conhecer mais sobre:
               </h3>

               <p className={stylePontos.pageImageLeftLegend}>
                  <a href="https://www.tudogostoso.com.br/receita/9547-arroz-de-cuxa-maranhense.html">Receita - Arroz de Cuxá</a> <br />
                  <a href="https://www.youtube.com/watch?v=ByyP4pef-xQ">Video - Preparação da Receita</a> <br />
                  
               </p>
            </div>

            <div className={stylePontos.pageTextRight}>
               <p className={stylePontos.pageTextRightLegend}>
               O arroz de cuxá é uma expressão autêntica da culinária maranhense, sendo um prato que destaca a utilização de ingredientes locais e técnicas tradicionais. Feito com arroz branco e um molho especial conhecido como cuxá, este prato é o resultado da mistura de vinagreira, camarão seco, gergelim, farinha de mandioca e uma variedade de temperos. A vinagreira, uma planta típica da região, confere ao cuxá um sabor levemente ácido que é inconfundível. <br /><br />

               O cuxá, além de ser utilizado no preparo do arroz, pode ser servido como acompanhamento para outros pratos, como peixes e carnes, mostrando sua versatilidade na culinária local. Em festividades e eventos culturais, o arroz de cuxá é frequentemente encontrado, servido ao lado de outras delícias maranhenses. Este prato é um verdadeiro símbolo da gastronomia do Maranhão, celebrado tanto por moradores locais quanto por visitantes que desejam experimentar algo autêntico. <br /> <br />

               A importância cultural do arroz de cuxá vai além de seu sabor. Ele representa a fusão de diferentes influências culinárias que marcam a história do Maranhão. A utilização de ingredientes indígenas, combinados com técnicas africanas e portuguesas, resulta em uma iguaria que é, ao mesmo tempo, tradicional e única. Cada garfada oferece uma viagem pelos sabores e histórias de uma região rica em cultura e tradição.
               </p>
            </div>
         </div>

         <div className={stylePontos.page}>
            <div className={stylePontos.pageTextLeft}>

               <h1 className={stylePontos.pageTextLeftTitle}>
                  A <strong>Torta de Camarão</strong>: um clássico da culinária maranhense, presente em festas e celebrações.
               </h1>
               <p className={stylePontos.pageTextLeftLegend}>
               A torta de camarão é uma verdadeira joia da culinária maranhense, muito apreciada em ocasiões especiais e celebrações familiares. Preparada com camarões frescos, batata, leite de coco e azeite de dendê, a torta é coberta com uma generosa camada de ovos batidos, que lhe confere uma textura dourada e apetitosa após ser levada ao forno. O resultado é um prato cremoso e repleto de sabor, que agrada tanto aos moradores locais quanto aos turistas. <br /><br />

               Além de seu sabor inigualável, a torta de camarão é um prato que demonstra a criatividade e a habilidade culinária dos maranhenses. O uso do leite de coco e do azeite de dendê, ingredientes comuns na cozinha africana, juntamente com os camarões, reflete a influência cultural mista que é característica do estado. Esta combinação de ingredientes não só enriquece o sabor, mas também conta uma história de tradição e herança cultural. <br /><br />

               A torta de camarão é frequentemente servida em festas e eventos, sendo um prato que simboliza a hospitalidade e a celebração. Em muitas famílias, a receita é passada de geração em geração, mantendo vivas as tradições culinárias. Cada variação da torta pode ter um toque pessoal, seja na escolha dos temperos ou na forma de preparo, mas o resultado final é sempre uma deliciosa homenagem à riqueza gastronômica do Maranhão.
               </p>
            </div>
            <div className={stylePontos.pageImageRight}>
               <div className={stylePontos.pageImageRightImage}>
                  <GalleryTortaCamarao />
               </div>
               <div className={stylePontos.pageImageRightLegend}>
                  <h3>
                     Para conhecer mais sobre:
                  </h3>
                  <p>
                     <a href="https://receitas.globo.com/tipos-de-prato/tortas/torta-de-camarao-tipicamente-maranhense-4edede7c694f0d29050005ad.ghtml">Receita - Torta de Camarão</a> <br /><br />

                     <a href="https://www.youtube.com/watch?v=O03C2IpXQT8">Video - Preparação da Receita</a>
                  </p>
               </div>
            </div>
         </div>

         <div className={stylePontos.page}>
            <div className={stylePontos.pageImageLeft}>
               <h1 className={stylePontos.pageImageLeftTitle}>
                  O <strong>Caruru</strong> :um prato tradicional com raízes africanas, muito apreciado no Maranhão
               </h1>
               <div className={stylePontos.pageImageLeftImage}>
                  <GalleryCaruru />
               </div>


            </div>

            <div className={stylePontos.pageTextRight}>
               <p className={stylePontos.pageTextRightLegend}>
               O caruru é uma das delícias da culinária maranhense que evidencia a forte influência africana na gastronomia do estado. Preparado com quiabo, camarão seco, azeite de dendê, castanha de caju e amendoim, este prato é rico em sabor e textura. A combinação desses ingredientes resulta em uma iguaria que é ao mesmo tempo nutritiva e deliciosa, refletindo a criatividade e a diversidade culinária do Maranhão.<br /><br />

               Na tradição maranhense, o caruru é frequentemente preparado para celebrações e festas religiosas, especialmente aquelas ligadas ao candomblé e outras práticas afro-brasileiras. Este prato é símbolo de resistência cultural e preservação das raízes africanas. A preparação do caruru é uma verdadeira arte, exigindo tempo e dedicação para que todos os sabores se combinem harmoniosamente. <br /><br />

               Além de seu sabor marcante, o caruru é um prato que conecta as pessoas e fortalece os laços comunitários. Em muitas celebrações, a preparação do caruru é um evento coletivo, onde amigos e familiares se reúnem para cozinhar e compartilhar a refeição. Este aspecto social do caruru destaca sua importância não apenas como alimento, mas como um elemento cultural que promove a união e a celebração das tradições maranhenses.
               </p>
            </div>
         </div>

         <div className={stylePontos.page}>
            <div className={stylePontos.pageTextLeft} >

               <h1 className={stylePontos.pageTextLeftTitle} >
                  O <strong>Guaraná Jesus</strong>: uma bebida icônica e refrescante, símbolo do Maranhão.
               </h1>
               <p className={stylePontos.pageTextLeftLegend}>
               O Guaraná Jesus é uma bebida que transcende o simples ato de matar a sede; é um ícone cultural do Maranhão. Criado em 1920 pelo farmacêutico Jesus Norberto Gomes, este refrigerante rosa com sabor adocicado e notas de cravo e canela se tornou uma das bebidas mais populares do estado. Seu sabor único e cor vibrante fazem do Guaraná Jesus uma experiência inconfundível para quem visita o Maranhão.<br /><br />

               Além de seu sabor distinto, o Guaraná Jesus é um símbolo de orgulho para os maranhenses. A bebida é frequentemente associada a momentos de celebração e lazer, sendo presença constante em festas, encontros familiares e eventos culturais. Seu rótulo rosa e a história por trás de sua criação acrescentam um charme especial, tornando o Guaraná Jesus uma verdadeira marca registrada do estado.<br /><br />

                O impacto do Guaraná Jesus vai além do Maranhão, com a bebida ganhando fãs em outras partes do Brasil e do mundo. No entanto, para os maranhenses, ele representa mais do que um refrigerante; é uma conexão com suas raízes culturais e uma celebração da criatividade e empreendedorismo locais. Cada gole de Guaraná Jesus é uma lembrança da rica tapeçaria cultural do Maranhão, tornando esta bebida um ícone eterno da região.  
               </p>
            </div>
            <div className={stylePontos.pageImageRight}>
               <div className={stylePontos.pageImageRightImage}>
                  <GalleryGuaranaJesus />
               </div>
               <div className={stylePontos.pageImageRightLegend}>
                  <h3>
                     Para conhecer mais sobre:
                  </h3>
                  <p>
                     <a href="https://blog.damatacafe.com.br/a-historia-do-guarana-jesus-tudo-sobre-o-refrigerante-rosa/">História do Guaraná Jesus</a> <br /><br />

                     
                  </p>
               </div>
            </div>
         </div>

      </section>
   )
}