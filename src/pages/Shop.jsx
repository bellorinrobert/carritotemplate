import React from 'react'
import SinglePage from '../components/SinglePage'
import Searvices from '../components/Searvices'
import ProductsOffer from '../components/ProductsOffer'
import ShopPage from './shop/ShopPage'
import { useParams } from 'react-router-dom'



const Shop = () => {
  
   const pametros= useParams()
   const id=pametros.id;
   const titulo=pametros.titulo

  return (
    <>
       
        <SinglePage titulo={"Shop Page"}/>
        <Searvices/>
        <ProductsOffer/>
        <ShopPage id={id} titulo={titulo}/>
        
    </>
  )
}

export default Shop