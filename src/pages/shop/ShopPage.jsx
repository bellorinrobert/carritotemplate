import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import MenuPrincipal from "../../services/MenuPrincipal"
import MenuSecundario from "../../services/MenuSecundario"
import ProdCat from "../../services/ProdCat"
import ProdCat2 from "../../services/ProdCat2"
import MostrarBusqueda from "../../services/MostrarBusqueda"


const ShopPage = ({ id, titulo }) => {
  // Estado para el input de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Hooks de navegación y ubicación (React Router)
  const navigate = useNavigate();
  const location = useLocation();

  // Maneja el envío del formulario de búsqueda
  const handleSearch = (e) => {
    alert('Buscando')
    e.preventDefault();
    const query = searchTerm.trim();
    if (query) {
      // Permanece en la misma ruta pero envía el término como estado
      navigate(".", { replace: true, state: { query } });
      setSearchTerm(""); // Limpia el campo después de buscar
    }
  };

  // Extrae el término de búsqueda del estado de la navegación
  const txtBuscar = location.state?.query?.trim() || "";
  const enModoBusqueda = Boolean(txtBuscar); // true si hay búsqueda activa



  return (
    <div className="container-fluid shop py-5">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-3 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
            <div className="product-categories mb-4">
              <h4>Categorias</h4>
              <ul className="list-unstyled">
                <MenuPrincipal inicio={0} elementos={10} />
              </ul>
            </div>
            {/*
        <div className="price mb-4">
          <h4 className="mb-2">Price</h4>
          <input type="range" className="form-range w-100" id="rangeInput" name="rangeInput" min={0} max={500} defaultValue={0} oninput="amount.value=rangeInput.value" />
          <output id="amount" name="amount" min-velue={0} max-value={500} htmlFor="rangeInput">0</output>
          <div className />
        </div>
        <div className="product-color mb-3">
          <h4>Select By Color</h4>
          <ul className="list-unstyled">
            <li>
              <div className="product-color-item">
                <a href="#" className="text-dark"><i className="fas fa-apple-alt text-secondary me-2" />
                  Gold</a>
                <span>(1)</span>
              </div>
            </li>
            <li>
              <div className="product-color-item">
                <a href="#" className="text-dark"><i className="fas fa-apple-alt text-secondary me-2" />
                  Green</a>
                <span>(1)</span>
              </div>
            </li>
            <li>
              <div className="product-color-item">
                <a href="#" className="text-dark"><i className="fas fa-apple-alt text-secondary me-2" />
                  White</a>
                <span>(1)</span>
              </div>
            </li>
          </ul>
        </div>
        * */}
            <div className="additional-product mb-4">
              <h4>Additional Products</h4>
              <MenuSecundario inicio={11} elementos={24} />
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
            <div className="product-tags py-4">
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
          <div className="col-lg-9 wow fadeInUp" data-wow-delay="0.1s">
            <div className="rounded mb-4 position-relative">
              <img src="/img/product-banner-3.jpg" className="img-fluid rounded w-100" style={{ height: 250 }} alt="Image" />
              <div className="position-absolute rounded d-flex flex-column align-items-center justify-content-center text-center" style={{ width: '100%', height: 250, top: 0, left: 0, background: 'rgba(242, 139, 0, 0.3)' }}>
                <h4 className="display-5 text-primary">SALE</h4>
                <h3 className="display-4 text-white mb-4">Get UP To 50% Off</h3>
                <a href="#" className="btn btn-primary rounded-pill">Shop Now</a>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-xl-7">
                <div className="input-group w-100 mx-auto d-flex">
                  {/* <form className="input-group w-100 mx-auto d-flex" onSubmit={handleSearch}>
                  <input
                    type="search"
                    className="form-control p-3"
                    placeholder="keywords"
                    aria-describedby="search-icon-1"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button type="submit" id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></button>
                </form> */}
                  <form className="input-group w-100 mx-auto d-flex" onSubmit={handleSearch}>
                    <input
                      type="search"
                      className="form-control p-3"
                      placeholder="keywords"
                      aria-describedby="search-icon-1"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit" id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></button>
                    {/* <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" /> */}
                    {/* <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span> */}
                  </form>
                </div>
              </div>
              <div className="col-xl-3 text-end">
                <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between">
                  <label htmlFor="electronics">Sort By:</label>
                  <select id="electronics" name="electronicslist" className="border-0 form-select-sm bg-light me-3" form="electronicsform">
                    <option value="volvo">Default Sorting</option>
                    <option value="volv">Nothing</option>
                    <option value="sab">Popularity</option>
                    <option value="saab">Newness</option>
                    <option value="opel">Average Rating</option>
                    <option value="audio">Low to high</option>
                    <option value="audi">High to low</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-xl-2">
                <ul className="nav nav-pills d-inline-flex text-center py-2 px-2 rounded bg-light mb-4">
                  <li className="nav-item me-4">
                    <a className="bg-light" data-bs-toggle="pill" href="#tab-5">
                      <i className="fas fa-th fa-3x text-primary" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="bg-light" data-bs-toggle="pill" href="#tab-6">
                      <i className="fas fa-bars fa-3x text-primary" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Renderizado condicional: Búsqueda vs Categoría */}
            {enModoBusqueda ? (
              // ✅ Modo BÚSQUEDA
              <div className="row g-4 product">
                <div className="text-center">
                  <p className="fs-4 py-4">Buscando :
                    <span className="fw-bold text-danger">{txtBuscar}</span>
                  </p>
                </div>
                <MostrarBusqueda txtBuscar={txtBuscar} />
              </div>
            ) : (
              <div className="tab-content">
                <div id="tab-5" className="tab-pane fade show p-0 active">
                  <div className="row g-4 product">
                    <div className="text-center">
                      <p className="fs-4">Productos de la Categoria:
                        <span className="fw-bold text-danger"> {titulo}</span>
                      </p>
                    </div>
                    <ProdCat id={id} />

                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="pagination d-flex justify-content-center mt-5">
                        <a href="#" className="rounded">«</a>
                        <a href="#" className="active rounded">1</a>
                        <a href="#" className="rounded">2</a>
                        <a href="#" className="rounded">3</a>
                        <a href="#" className="rounded">4</a>
                        <a href="#" className="rounded">5</a>
                        <a href="#" className="rounded">6</a>
                        <a href="#" className="rounded">»</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-6" className="products tab-pane fade show p-0">
                  <div className="row g-4 products-mini">
                    <div className="text-center">
                      <p className="fs-4">Productos de la Categoria:
                        <span className="fw-bold text-danger"> {titulo}</span>
                      </p>
                    </div>
                    <ProdCat2 id={id} />

                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="pagination d-flex justify-content-center mt-5">
                        <a href="#" className="rounded">«</a>
                        <a href="#" className="active rounded">1</a>
                        <a href="#" className="rounded">2</a>
                        <a href="#" className="rounded">3</a>
                        <a href="#" className="rounded">4</a>
                        <a href="#" className="rounded">5</a>
                        <a href="#" className="rounded">6</a>
                        <a href="#" className="rounded">»</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  )
}

export default ShopPage