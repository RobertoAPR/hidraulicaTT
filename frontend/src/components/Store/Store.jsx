import React from 'react'
import Footer from '../Footer';
import Header from './Header';
import { useEffect } from 'react';
import CategoryList from '../CategoryList';
import HorizontalCardProduct from '../HorizontalCardProduct';
import VerticalCardProduct from '../VerticalCardProduct';



const Store = () => {
  
  return (
    <div>
      <Header/>
       <div className='pt-16'>
      
      <CategoryList/>
      <HorizontalCardProduct category={"abrazaderas_sujetadores"} heading={"Abrazaderas y Sujetadores"}/>
      <HorizontalCardProduct category={"acoplamientos_rapidos"} heading={"Acoplamientos Rapidos"}/>

      <VerticalCardProduct category={"adaptadores"} heading={"Adaptadores"}/>
      <VerticalCardProduct category={"conectores_hidraulicos"} heading={"Conectores Hidraulicos"}/>
      <VerticalCardProduct category={"mangueras_hidraulicas"} heading={"Mangueras hidraulicas"}/>
      <VerticalCardProduct category={"manometros_accesorios_medicion"} heading={"Monometros y Accesorios de medicion"}/>
      <VerticalCardProduct category={"prensas_equipos_ensamblaje"} heading={"Prensas y equipo para ensablaje"}/>
      <VerticalCardProduct category={"protectores_manguera"} heading={"Protectores de mangueras"}/>
      <VerticalCardProduct category={"racores"} heading={"Racores"}/>
      <VerticalCardProduct category={"valvulas_hidraulicas"} heading={"Valvulas Hidraulicas"}/>
      <Footer/>
        </div>
    </div>
   
  )
}

export default Store
