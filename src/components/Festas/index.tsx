import React from "react";

import styleFestas from './Festas.module.scss';
import imagemPrincipalFestas from '../../assets/images/imagemPrincipalFestas.svg'

import GalleryBumbaBoi from "../Gallery/BumbaMeuBoi";
import GalleryTamborCrioula from "../Gallery/TamborCrioula";
import GalleryFestaDivino from "../Gallery/FestaDivino";
import GalleryReggae from "../Gallery/Reggae";

export default function Festas() {
   return (
      <section className={styleFestas.section}>

         <div className={styleFestas.page}>
            <div className={styleFestas.pageTextLeft}>
               <div className={styleFestas.pageTextLeftAlert}>
                  <p>
                     CONHEÇA AS FESTAS POPULARES DO
                  </p>
                  <h1>
                     MARANHÃO
                  </h1>
               </div>
               <h1 className={styleFestas.pageTextLeftTitle}>
                  Conhecer as festas populares do Maranhão é mergulhar em uma celebração vibrante de cores, músicas e danças.
               </h1>
               <p className={styleFestas.pageTextLeftLegend}>
                  O Bumba Meu Boi, com suas fantasias exuberantes e narrativas encantadoras, o Tambor de Crioula, com seus ritmos hipnotizantes,  a Festa do Divino Espirito Santo, um rico exemplo de fé e devoção, e o Reggae, com seu ritmo dançante e suave, são eventos imperdíveis. Cada festa revela a rica herança cultural e a alegria contagiante do povo maranhense.
               </p>
            </div>
            <div className={styleFestas.pageImageRight}>
               <img src={imagemPrincipalFestas} alt="" />
            </div>
         </div>

         <div className={styleFestas.page}>
            <div className={styleFestas.pageImageLeft}>
               <h1 className={styleFestas.pageImageLeftTitle}>
                  O <strong>Bumba Meu Boi</strong>: uma das manifestações culturais mais emblemática e diversa do Maranhão.
               </h1>
               <div className={styleFestas.pageImageLeftImage}>
                  <GalleryBumbaBoi />
               </div>

               <h3 className={styleFestas.pageImageLeftSubtitle}>
                  Para conhecer mais sobre:
               </h3>

               <p className={styleFestas.pageImageLeftLegend}>
                  <a href="https://open.spotify.com/playlist/1BGkxaPChVny466X5bzHY8?si=77OPSAM-QNi-yD4F4xQzAA">Playlist do Spotify</a> <br />
                  <a href="https://youtu.be/tjvHiGA0Sqo?si=hccjXrooTfHN_rfM">Vídeo Unesco</a> <br />
                  <a href="https://ich.unesco.org/en/RL/cultural-complex-of-bumba-meu-boi-from-maranhao-01510">Site Oficial da Unesco</a> <br />
               </p>
            </div>

            <div className={styleFestas.pageTextRight}>
               <p className={styleFestas.pageTextRightLegend}>
                  Originado no período colonial, esse folguedo mistura elementos de teatro, música, dança e artesanato. A história central gira em torno da morte e ressurreição de um boi, envolvendo personagens como Pai Francisco e Mãe Catirina. As apresentações, ricas em simbolismo e cor, são acompanhadas por toadas e ritmos regionais, tocados em instrumentos típicos como o pandeirão e a matraca. Celebrado especialmente durante os meses de junho e julho, o Bumba Meu Boi encanta pela diversidade de sotaques e grupos, cada um com suas peculiaridades e estilo próprio, refletindo a riqueza cultural do Maranhão.
                  <br /><br />

                  <strong className={styleFestas.pageTextRightSubtitle}>Os sotaques do Bumba Meu Boi:</strong> <br /><br />

                  <strong className={styleFestas.pageTextRightLegendName}>Matraca</strong>: O mais popular e com maior número de grupos, o sotaque de matraca é de origem da Ilha de São Luís. O instrumento que dá nome ao sotaque é composto por dois pequenos pedaços de madeira, o que motiva os fãs a fortalecerem o som. Além das matracas, os brincantes usam pandeirões e tambores-onça (uma espécie de cuíca com som mais grave) <br /> <br />

                  <strong className={styleFestas.pageTextRightLegendName}>Zabumba</strong>: Pandeirinhos, maracás e tantãs, além das zabumbas (grandes tambores), dão ritmo para os brincantes. De todos os sotaques, o zabumba é o que mantém com mais originalidade a influência africana e açoriana nas apresentações. No vestuário, destacam-se golas e saias de veludo bordado e chapéus com fitas coloridas, além de miçangas e canutilho nas roupas. O sotaque originou-se no município de Guimarães e é  considerado o primeiro sotaque de bumba-meu-boi do Maranhão. <br /> <br />

                  <strong className={styleFestas.pageTextRightLegendName}>Orquestra</strong>: O sotaque de orquestra é originário da região do Rio Munim e surgiu a partir da incorporação de outras influências musicais ao bumba-meu-boi. Os sons de sopro e cordas foram incluídos por meio de instrumentos como saxofone, clarinete e banjo, tornando o sotaque diferenciado. <br /><br />

                  <strong className={styleFestas.pageTextRightLegendName}>Costa-de-mão</strong>: Tradicional da região de Cururupu, no litoral Noroeste do Maranhão, o sotaque costa-de-mão tem raízes do período da escravidão. Os bois de costa-de-mão são reconhecidos pela forma como os brincantes tocam os instrumentos: literalmente com as costas das mãos. Além de roupa em veludo bordado, os brincantes usam chapéus em forma de cogumelo, com fitas coloridas e grinaldas de flores. <br /><br />

                  <strong className={styleFestas.pageTextRightLegendName}>Baixada</strong>: Matracas e pandeiros pequenos dão o ritmo deste sotaque. Um dos destaques é o personagem Cazumbá, uma figura mascarada com um vestido cheio de bordados e coloridos e um badalo na mão, como um sino de boi, que diverte os brincantes e o público. Outros usam um chapéu de vaqueiro com penas de ema.
               </p>
            </div>
         </div>

         <div className={styleFestas.page}>
            <div className={styleFestas.pageTextLeft}>

               <h1 className={styleFestas.pageTextLeftTitle}>
                  O <strong>Tambor de Crioula</strong>: marca da resistência cultural e religiosa no Maranhão.
               </h1>
               <p className={styleFestas.pageTextLeftLegend}>
                  O Tambor de Crioula é uma expressão cultural tradicional do Maranhão, que remonta ao período colonial e tem raízes africanas profundas. É uma dança circular, realizada principalmente por mulheres, ao som de tambores e cantos, sendo uma celebração da resistência e da identidade afro-brasileira. <br /> <br />
                  As dançarinas, conhecidas como coreiras, dançam descalças, movimentando-se em círculos com saias rodadas que criam um espetáculo visual impressionante. O ponto alto da dança é o "punga" ou "umbigada", um gesto simbólico e ritmado que representa a saudação e a troca de energia entre as participantes. <br /> <br />
                  Os tambores utilizados, geralmente três, são confeccionados artesanalmente e tocados por homens, que mantêm um ritmo constante e hipnotizante. As toadas, ou cantos, são entoadas em língua portuguesa com influências africanas, muitas vezes improvisadas e transmitidas oralmente de geração em geração. <br /><br />
                  O Tambor de Crioula é mais do que uma manifestação artística; é uma celebração da cultura negra e uma forma de preservação das tradições e da história das comunidades afrodescendentes no Maranhão. Em 2007, foi reconhecido como Patrimônio Cultural Imaterial Brasileiro pelo IPHAN, destacando sua importância e necessidade de preservação.
               </p>
            </div>
            <div className={styleFestas.pageImageRight}>
               <div className={styleFestas.pageImageRightImage}>
                  <GalleryTamborCrioula />
               </div>
               <div className={styleFestas.pageImageRightLegend}>
                  <h3>
                     Para conhecer mais sobre:
                  </h3>
                  <p>
                     <a href="https://open.spotify.com/playlist/21QD6OZIgi9F7yUGrtFSWW?si=T94Gm-IKQsyWFERwXxzKvA%0A">Playlist do Spotify</a> <br /><br />

                     <a href="https://g1.globo.com/ma/maranhao/sao-joao/2022/noticia/2022/06/18/tambor-de-crioula-marcas-da-resistencia-cultural-e-religiosa.ghtml">Dia Nacional do Tambor de Crioula</a>
                  </p>
               </div>
            </div>
         </div>

         <div className={styleFestas.page}>
            <div className={styleFestas.pageImageLeft}>
               <h1 className={styleFestas.pageImageLeftTitle}>
                  A <strong>Festa do Divino Espírito Santo</strong>:uma das celebrações religiosas mais antigas e significativas do estado do Maranhão.
               </h1>
               <div className={styleFestas.pageImageLeftImage}>
                  <GalleryFestaDivino />
               </div>


            </div>

            <div className={styleFestas.pageTextRight}>
               <p className={styleFestas.pageTextRightLegend}>
                  A Festa do Divino Espírito Santo no Maranhão é uma das celebrações religiosas mais antigas e significativas do estado, com raízes que remontam ao período colonial. Realizada principalmente na cidade de Alcântara, essa festa acontece durante o período de Pentecostes e reúne elementos de fé, cultura e tradição popular. <br /><br />

                  A festividade começa com a coroação do "imperador" ou "imperatriz", geralmente uma criança escolhida pela comunidade, que simboliza a realeza e a bênção do Espírito Santo. Durante a celebração, ocorrem procissões, missas, novenas, danças, cantos e distribuição de alimentos para os participantes e a comunidade, simbolizando a partilha e a fraternidade. <br /><br />

                  A preparação para a festa envolve a confecção de trajes elaborados, coroas e cetros, além da ornamentação das ruas e casas com bandeiras e enfeites coloridos. Um dos momentos mais esperados é o cortejo do mastro, que é erguido em honra ao Divino Espírito Santo, seguido por danças tradicionais e apresentações culturais. <br /> <br />

                  A Festa do Divino Espírito Santo é marcada pela forte devoção religiosa e pela preservação das tradições culturais do Maranhão, sendo um momento de união e celebração para as comunidades envolvidas. A festa destaca a riqueza do sincretismo religioso, mesclando elementos do catolicismo com tradições afro-brasileiras, e reforça a identidade cultural do povo maranhense.
               </p>
            </div>
         </div>

         <div className={styleFestas.page}>
            <div className={styleFestas.pageTextLeft} >

               <h1 className={styleFestas.pageTextLeftTitle} >
                  O <strong>Reggae</strong>: um ritmo tão popular que São Luís se tornou a capital nacional do reggae.
               </h1>
               <p className={styleFestas.pageTextLeftLegend}>
                  O reggae no Maranhão é um fenômeno cultural único que destaca a influência dessa música jamaicana no estado. Desde os anos 1970, o reggae conquistou um espaço significativo na vida dos maranhenses, especialmente na capital, São Luís, que é carinhosamente chamada de "Jamaica Brasileira". <br /><br />
                  A paixão pelo reggae no Maranhão é evidente nas inúmeras "radiolas" (sistemas de som) que tocam músicas de grandes nomes do reggae mundial, como Bob Marley, Gregory Isaacs e Peter Tosh, além de artistas locais que ganharam notoriedade. As festas de reggae, conhecidas como "reggae roots" ou "reggae de salão", são populares e reúnem pessoas de todas as idades para dançar o característico "dois pra lá, dois pra cá" em ritmo de reggae. <br /><br />
                  O bairro de Praia Grande, no centro histórico de São Luís, é um dos epicentros desse movimento, onde bares e clubes de reggae atraem moradores e turistas. O Museu do Reggae, inaugurado em 2018, celebra essa rica tradição e oferece uma visão aprofundada da história e da influência do reggae no estado. <br /><br />
                  Além de sua presença nas festas e na vida noturna, o reggae maranhense tem um forte impacto social, promovendo mensagens de paz, amor e resistência. A identificação com as letras e a batida envolvente do reggae reflete a ligação profunda da população com essa música, tornando o Maranhão um verdadeiro reduto do reggae no Brasil.
               </p>
            </div>
            <div className={styleFestas.pageImageRight}>
               <div className={styleFestas.pageImageRightImage}>
                  <GalleryReggae />
               </div>
               <div className={styleFestas.pageImageRightLegend}>
                  <h3>
                     Para conhecer mais sobre:
                  </h3>
                  <p>
                     <a href="https://open.spotify.com/playlist/2idVCm9WX50irPcv5kvjc0?si=GPR_mpsGRLadmu9W_3xNGw&pi=tsvoGeotTRWRG">Playlist do Spotify</a> <br /><br />

                     <a href="https://www12.senado.leg.br/noticias/materias/2023/09/12/sao-luis-e-reconhecida-como-capital-nacional-do-reggae">São Luís - Capital do Reggae:</a>
                  </p>
               </div>
            </div>
         </div>

      </section>
   )
}