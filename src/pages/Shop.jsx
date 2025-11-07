import { useParams } from "react-router-dom"
import ProductsOffer from "../components/ProductsOffer"
import SinglePage from "../components/SinglePage"
import Searvices from "./home/Searvices"
import ShopPage from "./shop/ShopPage"


const Shop = () => {
  const param = useParams()
  return (
    <>
    <h1>{param.cate}</h1>
    <SinglePage title={"Shop"} />
    <Searvices />
    <ProductsOffer />
    <ShopPage cate={param.cate} />
    </>
  )
}

export default Shop