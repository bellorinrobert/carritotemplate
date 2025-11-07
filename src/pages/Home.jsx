import OurProducts from "../components/OurProducts"
import ProductsOffer from "../components/ProductsOffer"
import CarouselStart from "./home/CarouselStart"
import Searvices from "./home/Searvices"

const Home = () => {
  return (
    <>
     <CarouselStart />
     <Searvices />
     <ProductsOffer />
     <OurProducts />
    </>
  )
}

export default Home