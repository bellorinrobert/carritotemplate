import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCarrito } from "../../context/CarritoContext";
import { formatCurrency } from "../../util/funciones";


const Topbar2 = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Hooks de navegación y ubicación (React Router)
  const navigate = useNavigate();
  const location = useLocation();

  // Maneja el envío del formulario de búsqueda
  const handleSearch = (e) => {
    // alert('Buscando')
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

  const { carrito } = useCarrito();
  const [total, setTotal] = useState(0);
  

    // Calcular total cada vez que cambia el carrito
  useEffect(() => {
      const suma = carrito.reduce((acc, item) => acc + (item.price * item.cantidad), 0);
      setTotal(suma);
  }, [carrito]);

  return (
<div className="container-fluid px-5 py-4 d-none d-lg-block">
  <div className="row gx-0 align-items-center text-center">
    <div className="col-md-4 col-lg-3 text-center text-lg-start">
      <div className="d-inline-flex align-items-center">
        <a href className="navbar-brand p-0">
          <h1 className="display-5 text-primary m-0 wow animate__animated animate__bounce"><i className="fas fa-shopping-bag text-secondary me-2" />Electro</h1>
          {/* <img src="img/logo.png" alt="Logo"> */}
        </a>
      </div>
    </div>
    <div className="col-md-4 col-lg-6 text-center">
      <div className="position-relative ps-4">
        <div className="d-flex border rounded-pill">
          <form className="input-group w-100 mx-auto d-flex" onSubmit={handleSearch}>
                    <input
                      type="search"
                      className="form-control p-3"
                      placeholder="keywords"
                      aria-describedby="search-icon-1"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {/* <button type="submit" id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></button> */}
                    {/* <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" /> */}
                    {/* <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span> */}
          {/* <input className="form-control border-0 rounded-pill w-100 py-3" type="text" data-bs-target="#dropdownToggle123" placeholder="Search Looking For?" />
          <select className="form-select text-dark border-0 border-start rounded-0 p-3" style={{width: 200}}>
          <option value="All Category">All Category</option>
          <option value="Pest Control-2">Category 1</option>
          <option value="Pest Control-3">Category 2</option>
          <option value="Pest Control-4">Category 3</option>
          <option value="Pest Control-5">Category 4</option>
          </select> */}
          <button type="submit" id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></button>
          {/* <button type="button" className="btn btn-primary rounded-pill py-3 px-5" style={{border: 0}}><i className="fas fa-search" /></button> */}
          </form>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-lg-3 text-center text-lg-end">
      <div className="d-inline-flex align-items-center">
        <a href="#" className="text-muted d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-md-square border"><i className="fas fa-random" /></span></a>
        <a href="#" className="text-muted d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-md-square border"><i className="fas fa-heart" /></span></a>
        <Link to={"/cartpage"} href="#" className="text-muted d-flex align-items-center justify-content-center"><span className="rounded-circle btn-md-square border"><i className="fas fa-shopping-cart" /></span>
          <span className="ms-2 badge bg-danger fs-4">${formatCurrency(total)}</span></Link>
      </div>
    </div>
  </div>
</div>

  )
}

export default Topbar2