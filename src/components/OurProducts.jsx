
import ProdCat from "../services/ProdCat";


const OurProducts = () => {
    
      
     

  return (
<div className="container-fluid product py-5">
  <div className="container py-5">
    <div className="tab-class">
      <div className="row g-4">
        <div className="col-lg-4 text-start wow animate__animated animate__fadeInLeft" data-wow-delay="0.1s">
          <h1>Our Products</h1>
        </div>
        <div className="col-lg-8 text-end wow animate__animated animate__fadeInRight" data-wow-delay="0.1s">
          <ul className="nav nav-pills d-inline-flex text-center mb-5">
            <li className="nav-item mb-4">
              <a className="d-flex mx-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                <span className="text-dark" style={{width: 130}}>Movil</span>
              </a>
            </li>
            <li className="nav-item mb-4">
              <a className="d-flex py-2 mx-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                <span className="text-dark" style={{width: 130}}>Laptops</span>
              </a>
            </li>
            <li className="nav-item mb-4">
              <a className="d-flex mx-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                <span className="text-dark" style={{width: 130}}>Tablets</span>
              </a>
            </li>
            <li className="nav-item mb-4">
              <a className="d-flex mx-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                <span className="text-dark" style={{width: 130}}>Accessorios</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content">
        <div id="tab-1" className="tab-pane show p-0 active">
          <div className="row g-4">

            <ProdCat id={"smartphones"} />

          </div>

        </div>
        <div id="tab-2" className="tab-pane   show p-0">
          <div className="row g-4">

            <ProdCat id={"laptops"} />

          </div>
        </div>
        <div id="tab-3" className="tab-pane  show p-0">
          <div className="row g-4">

            <ProdCat id={"tablets"} />

          </div>
        </div>
        <div id="tab-4" className="tab-pane  show p-0">
          <div className="row g-4">

            <ProdCat id={"mobile-accessories"} />

          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default OurProducts