
import MenuPrincipal from "../../services/MenuPrincipal"
import MenuSecundario from "../../services/MenuSecundario"
import MostrarDetalle from "../../services/MostrarDetalle";


const PaginaDetalle = () => {
   

    return (
        <div className="container-fluid shop py-5">
            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-lg-5 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="input-group w-100 mx-auto d-flex mb-4">
                            <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                            <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
                        </div>
                        <div className="product-categories mb-4">
                            <h4>Products Categories</h4>
                           
                            <ul className="list-unstyled">
                                  <MenuPrincipal inicio={0} elementos={5}/>
                               
                            </ul>
                        </div>
                        <div className="additional-product mb-4">
                            <h4>Additional Products</h4>
                             <MenuSecundario inicio={11} elementos={15}/>
                        </div>
                        <div className="featured-product mb-4">
                            <h4 className="mb-3">Featured products</h4>
                            <div className="featured-product-item">
                                <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                                    <img src="/img/product-3.png" className="img-fluid rounded" alt="Image" />
                                </div>
                                <div>
                                    <h6 className="mb-2">SmartPhone</h6>
                                    <div className="d-flex mb-2">
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="d-flex mb-2">
                                        <h5 className="fw-bold me-2">2.99 $</h5>
                                        <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="featured-product-item">
                                <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                                    <img src="/img/product-4.png" className="img-fluid rounded" alt="Image" />
                                </div>
                                <div>
                                    <h6 className="mb-2">Smart Camera</h6>
                                    <div className="d-flex mb-2">
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="d-flex mb-2">
                                        <h5 className="fw-bold me-2">2.99 $</h5>
                                        <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="featured-product-item">
                                <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                                    <img src="/img/product-5.png" className="img-fluid rounded" alt="Image" />
                                </div>
                                <div>
                                    <h6 className="mb-2">Smart Camera</h6>
                                    <div className="d-flex mb-2">
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="d-flex mb-2">
                                        <h5 className="fw-bold me-2">2.99 $</h5>
                                        <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="featured-product-item">
                                <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                                    <img src="/img/product-6.png" className="img-fluid rounded" alt="Image" />
                                </div>
                                <div>
                                    <h6 className="mb-2">Smart Camera</h6>
                                    <div className="d-flex mb-2">
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="d-flex mb-2">
                                        <h5 className="fw-bold me-2">2.99 $</h5>
                                        <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="featured-product-item">
                                <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                                    <img src="/img/product-7.png" className="img-fluid rounded" alt="Image" />
                                </div>
                                <div>
                                    <h6 className="mb-2">Camera Leance</h6>
                                    <div className="d-flex mb-2">
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="d-flex mb-2">
                                        <h5 className="fw-bold me-2">2.99 $</h5>
                                        <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="featured-product-item">
                                <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                                    <img src="/img/product-8.png" className="img-fluid rounded" alt="Image" />
                                </div>
                                <div>
                                    <h6 className="mb-2">Smart Camera</h6>
                                    <div className="d-flex mb-2">
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star text-secondary" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="d-flex mb-2">
                                        <h5 className="fw-bold me-2">2.99 $</h5>
                                        <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center my-4">
                                <a href="#" className="btn btn-primary px-4 py-3 rounded-pill w-100">Vew More</a>
                            </div>
                        </div>
                        <a href="#">
                        </a><div className="position-relative"><a href="#">
                            <img src="/img/product-banner-2.jpg" className="img-fluid w-100 rounded" alt="Image" />
                        </a><div className="text-center position-absolute d-flex flex-column align-items-center justify-content-center rounded p-4" style={{ width: '100%', height: '100%', top: 0, right: 0, background: 'rgba(242, 139, 0, 0.3)' }}><a href="#">
                            <h5 className="display-6 text-primary">SALE</h5>
                            <h4 className="text-secondary">Get UP To 50% Off</h4>
                        </a><a href="#" className="btn btn-primary rounded-pill px-4">Shop Now</a>
                            </div>
                        </div>
                        <div className="product-tags my-4">
                            <h4 className="mb-3">PRODUCT TAGS</h4>
                            <div className="product-tags-items bg-light rounded p-3">
                                <a href="#" className="border rounded py-1 px-2 mb-2">New</a>
                                <a href="#" className="border rounded py-1 px-2 mb-2">brand</a>
                                <a href="#" className="border rounded py-1 px-2 mb-2">black</a>
                                <a href="#" className="border rounded py-1 px-2 mb-2">white</a>
                                <a href="#" className="border rounded py-1 px-2 mb-2">tablats</a>
                                <a href="#" className="border rounded py-1 px-2 mb-2">phone</a>
                                <a href="#" className="border rounded py-1 px-2 mb-2">camera</a>
                                <a href="#" className="border rounded py-1 px-2 mb-2">drone</a>
                                <a href="#" className="border rounded py-1 px-2 mb-2">talevision</a>
                                <a href="#" className="border rounded py-1 px-2 mb-2">slaes</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-xl-9 wow fadeInUp" data-wow-delay="0.1s">

                    <MostrarDetalle />

                    </div>
                </div>
            </div>
        </div>

    )
}

export default PaginaDetalle