import React from 'react';
import Header from '../components/Header'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Home from '../components/Home';


import style from './App.module.scss';


import Festas from '../components/Festas';

function App() {
  return (
    <div className={style.AppStyle}>
    <Header />
    
    <Festas />
    <Footer />
    </div>
  );
}

export default App;
