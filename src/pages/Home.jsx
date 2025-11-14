import OurProducts from "../components/OurProducts"
import ProductsOffer from "../components/ProductsOffer"
import Searvices from "../components/Searvices"
import CarouselStart from "./home/CarouselStart"


const Home = () => {
  return (
    <>
        <CarouselStart/>
        <Searvices/>
        <ProductsOffer/>
        <OurProducts/>
    </>
  )
}

export default Home