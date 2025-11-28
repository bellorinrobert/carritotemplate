import { Link } from "react-router-dom";
import { useCarrito } from "../../context/CarritoContext";
import { formatCurrency } from "../../util/funciones";


const CardProduct1 = ({item}) => {
     const { carrito, agregarAlCarrito  } = useCarrito();
     const enCarrito = carrito.find(producto => producto.id === item.id);
  return (
               <div className="col-lg-4">
                <div className="product-item rounded wow animate__animated animate__sfadeInUp" data-wow-delay="0.1s">
                  <div className="product-item-inner border rounded">

                    <div className="product-item-inner-item">
                      <img src={item.thumbnail} className="img-fluid w-100 rounded-top" alt />

                       {enCarrito && (
                            <div className="product-new fs-1"> {enCarrito.cantidad}</div>
                        )}
                    
                      <div className="product-details">
                        <Link to={`/detalle/${item.id}/${item.title}`} href="#"><i className="fa fa-eye fa-1x" /></Link>
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
  )
}

export default CardProduct1