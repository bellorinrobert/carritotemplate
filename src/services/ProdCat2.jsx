import { useEffect, useState } from "react";
import { formatCurrency } from "../util/funciones";
const API = 'https://dummyjson.com/products/category/';

const ProdCat2 = ({id}) => {
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
        {datos.map((item)=>(
           <div key={item.item} className="col-lg-6">
                <div className="products-mini-item border">
                  <div className="row g-0">
                    <div className="col-5">
                      <div className="products-mini-img border-end h-100">
                        <img src={item.thumbnail} className="img-fluid w-100 h-100" alt="Image" />
                        <div className="products-mini-icon rounded-circle bg-primary">
                          <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-7">
                      <div className="products-mini-content p-3">
                        <a href="#" className="d-block mb-2">{item.category}</a>
                        <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                        <del className="me-2 fs-5">${formatCurrency(item.price)}</del>
                        <span className="text-primary fs-5">${formatCurrency(item.price * (1 - item.discountPercentage / 100))}</span>
                      </div>
                    </div>
                  </div>
                  <div className="products-mini-add border p-3">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Add To Cart</a>
                    <div className="d-flex">
                      <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                      <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                    </div>
                  </div>
                </div>
           </div>
        ))}
    
    </>
  )
}

export default ProdCat2