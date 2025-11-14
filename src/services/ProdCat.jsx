import { useEffect, useState } from "react";
import { formatCurrency } from "../util/funciones";
import { useCarrito } from "../context/CarritoContext";
const API = 'https://dummyjson.com/products/category/';

const ProdCat = ({id}) => {

    const { carrito, agregarAlCarrito  } = useCarrito();



    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const URI=API+id
    const getDatos = async () => {
        try {
            const response = await fetch(URI);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setDatos(data.products);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };


   // const enCarrito = carrito.find(producto => producto.id === item.id);


    useEffect(() => {
        getDatos();
    }, [id]);
    
    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>Cargando Personajes...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="text-center py-5 text-danger">
                <h4>Error al cargar los Personajes</h4>
                <p>{error}</p>
            </div>
        );
    }
  return (
    <>
        {datos.map((item)=>{
          const enCarrito = carrito.find(producto => producto.id === item.id);
          
          return(

            <div className="col-lg-4">
                <div className="product-item rounded wow animate__animated animate__sfadeInUp" data-wow-delay="0.1s">
                  <div className="product-item-inner border rounded">

                    <div className="product-item-inner-item">
                      <img src={item.thumbnail} className="img-fluid w-100 rounded-top" alt />

                       {enCarrito && (
                            <div className="product-new fs-1"> {enCarrito.cantidad}</div>
                        )}
                    
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">{item.category}</a>
                      <a href="#" className="d-block h4">{item.title}<br /> </a>
                      <del className="me-2 fs-5">${formatCurrency(item.price)}</del>
                      <span className="text-primary fs-5">${formatCurrency(item.price * (1 - item.discountPercentage / 100))}</span>
                    </div>

                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <button  className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4" onClick={() => agregarAlCarrito(item)}>
                      <i className="fas fa-shopping-cart me-2" /> 
                        Add To Cart
                    </button>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
    
      )})}
    
    </>
  )
}

export default ProdCat