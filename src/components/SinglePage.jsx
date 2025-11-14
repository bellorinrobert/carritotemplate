import { Link } from "react-router-dom"


const SinglePage = ({titulo}) => {
  return (
    <div class="container-fluid page-header py-5">
        <h1 class="text-center text-white display-6 wow fadeInUp" data-wow-delay="0.1s">{titulo}</h1>
        <ol class="breadcrumb justify-content-center mb-0 wow fadeInUp" data-wow-delay="0.3s">
            <li class="breadcrumb-item"><Link to={"/home"} href="#">Home</Link></li>
            <li class="breadcrumb-item"><Link to={"/shop"} href="#">Shop</Link></li>
            <li class="breadcrumb-item active text-white">{titulo}</li>
        </ol>
    </div>
  )
}

export default SinglePage