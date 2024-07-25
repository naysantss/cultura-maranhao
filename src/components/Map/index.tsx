import React from "react";

import styleMap from './Map.module.scss';

export default function Map() {
   return(
      <div className={styleMap.mapContainer}>
         <iframe src="https://www.google.com/maps/d/embed?mid=1UBfUKnFq3sIBJqudProhS-oe6o7rAOA&ehbc=2E312F&noprof=1" ></iframe>
      </div>
   )
}