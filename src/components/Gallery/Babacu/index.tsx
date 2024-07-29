import {useState, useEffect, useRef} from "react";
import {motion} from 'framer-motion';
import styleGallery from './GalleryBabacu.module.scss';

import img1 from '../../../assets/images/gallery/Babacu/img1.jpg';
import img2 from '../../../assets/images/gallery/Babacu/img2.jpg';
import img3 from '../../../assets/images/gallery/Babacu/img3.jpg';
import img4 from '../../../assets/images/gallery/Babacu/img4.jpg';




const images = [img1, img2, img3, img4];


export default function GalleryBabacu() {
   const carrossel = useRef<HTMLDivElement>(null);
   const [width, setWidth] = useState(0);

   useEffect(() => {
      if (carrossel.current) {
        setWidth(carrossel.current.scrollWidth - carrossel.current.offsetWidth);
      }
    }, []);
  
   return(
      <div className={styleGallery.gallery}>
         <motion.div
          ref={carrossel} 
          className={styleGallery.carrossel}
           whileTap={ {cursor: "grabbing"}} >
            <motion.div
             className={styleGallery.interno} 
             drag="x" 
             dragConstraints={{right:0, left: -width}} 
             initial={{x: 150}}
             animate={{x: 0}}
             transition={{duration: 2}} >
               {images.map(image => (
                  <motion.div className={styleGallery.imagem} key={image}>
                     <img src={image} alt="" />
                  </motion.div>
               ))}
            </motion.div>
         </motion.div>
      </div>
   )
}