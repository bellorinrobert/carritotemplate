
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { formatCurrency } from "../util/funciones";
import { useCarrito } from "../context/CarritoContext";
import useEmblaCarousel from 'embla-carousel-react';
import Swal from 'sweetalert2';
const API = 'https://dummyjson.com/products/';
const MostrarDetalle = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id, titulo } = useParams();
    const { carrito, agregarAlCarrito, actualizarCantidad } = useCarrito();


    //const enCarrito = carrito.find(producto => producto.id === item.id);

    const navigate = useNavigate();
    const URI = API + id
    const getProduct = async () => {
        try {
            const res = await fetch(URI); // https://dummyjson.com/products/1 
            if (!res.ok) throw new Error(`Error al cargar datos (status: ${res.status})`);
            const data = await res.json();
            setItem(data);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProduct();
    }, [id]);

    const enCarrito = carrito.find(producto => producto.id === parseInt(id, 10));



    // Mientras se carga...
    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
                <p className="mt-2">Cargando detalles del producto</p>
            </div>
        );
    }

    // Si hay error...
    if (error) {
        return (
            <div className="text-center py-5 text-danger">
                <h4>Hubo un problema al cargar los datos</h4>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="row g-4 single-product">
            <div className="col-xl-6">
                <div className="single-carousel owl-carousel">
                    <div className="d-flex justify-content-end mb-3">
                        <button onClick={() => navigate(-1)} className="btn btn-primary">
                            ← Volver
                        </button>
                    </div>
                    <div className="col-xl-6">
                        {item.images && item.images.length > 0 ? (
                            <ProductImageCarousel images={item.images} />
                        ) : (
                            <div className="bg-light rounded d-flex align-items-center justify-content-center" style={{ height: '400px' }}>
                                <span className="text-muted">Sin imágenes disponibles</span>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <div className="col-xl-6">
                <h4 className="fw-bold mb-3">{titulo}</h4>
                <p className="mb-3"><b>Category:</b> {item.category}</p>
                <del className="me-2 fs-5">${formatCurrency(item.price)}</del>
                <span className="text-primary fs-5">${formatCurrency(item.price * (1 - item.discountPercentage / 100))}</span>
                <div className="d-flex mb-4">
                    {Array.from({ length: 5 }, (_, i) => (
                        <i
                            key={i}
                            className={`fa fa-star  ${i < Math.floor(item.rating) ? 'text-danger' : ''}`}
                        />
                    ))}
                </div>
                <div className="mb-3">
                    <div className="btn btn-primary d-inline-block rounded text-white py-1 px-4 me-2"><i className="fab fa-facebook-f me-1" /> Share</div>
                    <div className="btn btn-secondary d-inline-block rounded text-white py-1 px-4 ms-2"><i className="fab fa-twitter ms-1" /> Share</div>
                </div>
                <div className="d-flex flex-column mb-3">
                    <small><b>Product SKU:</b> {item.sku}</small>
                    <small><b>Marca:</b> {item.brand}</small>
                    <h4>Disponible: <strong className="text-primary">{item.stock} items in stock</strong></h4>
                </div>
                <p className="mb-4">Garantia: {item.warrantyInformation}</p>

                <p className="mb-4">Tiempo de Envio: {item.shippingInformation}</p>

                <div className="input-group quantity mb-5" >
                    <div className="input-group-btn me-3">
                        <button className="btn btn-sm btn-minus rounded-circle btn-danger border"
                            onClick={() => actualizarCantidad(item.id, enCarrito.cantidad - 1)}
                        >
                            <i className="fa fa-minus" />
                        </button>
                    </div>
                    <span className="me-3 fs-5">{enCarrito && enCarrito.cantidad}</span>
                    <div className="input-group-btn">
                        <button className="btn btn-sm btn-plus rounded-circle btn-success border"
                            onClick={() => actualizarCantidad(item.id, enCarrito.cantidad + 1)}>
                            <i className="fa fa-plus" />
                        </button>
                    </div>
                </div>
                <button href="#" className="btn btn-primary border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
                    onClick={() => agregarAlCarrito(item)}>
                    <i className="fa fa-shopping-bag me-2 text-white" /> Add to cart</button>
            </div>
            <div className="col-lg-12">
                <nav>
                    <div className="nav nav-tabs mb-3">
                        <button className="nav-link active border-white border-bottom-0" type="button" role="tab" id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about" aria-controls="nav-about" aria-selected="true">Description</button>
                        <button className="nav-link border-white border-bottom-0" type="button" role="tab" id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission" aria-controls="nav-mission" aria-selected="false">Reviews</button>
                    </div>
                </nav>
                <div className="tab-content mb-5">
                    <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                        <p><b>Descripción: </b>{item.description}</p>

                        <hr />
                        {item.dimensions && (
                            <p>
                                <b>Dimensiones:</b>
                                <br />
                                <b>Ancho:</b> {item.dimensions.width} cm
                                <br />
                                <b>Alto:</b> {item.dimensions.height} cm
                                <br />
                                Profundidad: {item.dimensions.depth} cm
                            </p>
                        )}
                        <p><strong>Política de devolución:</strong> {item.returnPolicy}</p>
                        <p><strong>Cantidad mínima de pedido:</strong> {item.minimumOrderQuantity}</p>
                    </div>

                    <div className="tab-pane" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                        {item.reviews && item.reviews.length > 0 ? (
                            item.reviews.map((review, index) => {
                                // Formatear fecha: "2025-04-30T09:41:02.053Z" → "April 30, 2025"
                                const reviewDate = new Date(review.date);
                                const formattedDate = reviewDate.toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                });

                                // Renderizar estrellas (5 total)
                                const renderStars = () => {
                                    return Array.from({ length: 5 }, (_, i) => (
                                        <i
                                            key={i}
                                            className={`fa fa-star ${i < Math.floor(review.rating) ? 'text-warning' : ''}`}
                                        />
                                    ));
                                };

                                return (
                                    <div className="d-flex mb-4" key={index}>
                                        {/* Avatar: DummyJSON no da avatar, así que usamos uno por defecto */}
                                        <img
                                            src="/img/avatar.jpg"
                                            className="img-fluid rounded-circle p-3"
                                            style={{ width: 100, height: 100, objectFit: 'cover' }}
                                            alt={`${review.reviewerName} avatar`}
                                        />
                                        <div className="ms-3">
                                            <p className="mb-2" style={{ fontSize: '14px', color: '#6c757d' }}>
                                                {formattedDate}
                                            </p>
                                            <div className="d-flex justify-content-between align-items-start">
                                                <h5 className="mb-1">{review.reviewerName}</h5>
                                                <div className="d-flex mb-2">
                                                    {renderStars()}
                                                </div>
                                            </div>
                                            <p className="text-dark mb-0">{review.comment}</p>
                                            <p className="text-dark mb-0">{review.reviewerEmail}</p>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <p className="text-muted">No hay reseñas disponibles para este producto.</p>
                        )}
                    </div>
                    <div className="tab-pane" id="nav-vision" role="tabpanel">
                        <p className="text-dark">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                            tempor sit. Aliqu diam
                            amet diam et eos labore. 3</p>
                        <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                            labore.
                            Clita erat ipsum et lorem et sit</p>
                    </div>
                </div>
            </div>
            <form action="#">
                <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="border-bottom rounded">
                            <input type="text" className="form-control border-0 me-4" placeholder="Yur Name *" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="border-bottom rounded">
                            <input type="email" className="form-control border-0" placeholder="Your Email *" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="border-bottom rounded my-4">
                            <textarea name id className="form-control border-0" cols={30} rows={8} placeholder="Your Review *" spellCheck="false" defaultValue={""} />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="d-flex justify-content-between py-3 mb-5">
                            <div className="d-flex align-items-center">
                                <p className="mb-0 me-3">Please rate:</p>
                                <div className="d-flex align-items-center" style={{ fontSize: 12 }}>
                                    <i className="fa fa-star text-muted" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                </div>
                            </div>
                            <a href="#" className="btn btn-primary border border-secondary text-primary rounded-pill px-4 py-3">
                                Post Comment</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}


const ProductImageCarousel = ({ images }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on('select', onSelect);
        onSelect(); // Init
    }, [emblaApi]);

    return (
        <div className="embla">
            {/* Carrusel principal */}
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((imgUrl, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="single-inner bg-light rounded d-flex align-items-center justify-content-center">
                                <img
                                    src={imgUrl.trim()} // ✅ Elimina espacios en blanco en la URL
                                    alt={`Product image ${index + 1}`}
                                    className="img-fluid"
                                    style={{ maxHeight: '400px', objectFit: 'contain' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Miniaturas como dots (opcional) */}
            <div className="embla__thumbnails d-flex justify-content-center mt-3 gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`embla__thumb ${selectedIndex === index ? 'border border-primary' : 'border'}`}
                        type="button"
                        onClick={() => emblaApi?.scrollTo(index)}
                        style={{
                            width: '50px',
                            height: '50px',
                            background: 'none',
                            padding: 0,
                            borderRadius: '4px',
                        }}
                    >
                        <img
                            src={images[index].trim()}
                            alt={`Thumbnail ${index + 1}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '4px',
                            }}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};
export default MostrarDetalle