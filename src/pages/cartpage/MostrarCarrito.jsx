import { useEffect, useState } from "react";
import { useCarrito } from "../../context/CarritoContext";
import { formatCurrency } from "../../util/funciones";
import Swal from 'sweetalert2';

const MostrarCarrito = () => {
       const { carrito, eliminarDelCarrito, actualizarCantidad, vaciarCarrito, enviarPedido } = useCarrito();
    const [total, setTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [shipping, setShipping] = useState(3);
    const [impuesto, setImpuesto] = useState(16);
    // Calcular total cada vez que cambia el carrito
    useEffect(() => {
        const suma = carrito.reduce((acc, item) => acc + (item.price * item.cantidad), 0);
        setTotal(suma);
        const items = carrito.reduce((acc, item) => acc + item.cantidad, 0);
        setTotalItems(items);
    }, [carrito]);

  return (
    <>
            <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Picture</th>
                        <th scope="col">Name</th>
                        <th scope="col">Model</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            carrito.map((item) => (
                            <tr>
                                <td scope="row">
                                 <img src={item.thumbnail} alt={item.name} className="img-fluid" width={80} />
                                </td>
                                <th scope="row">
                                <p className="mb-0 py-4">{item.title}</p>
                                </th>
                                <td>
                                <p className="mb-0 py-4">{item.sku}</p>
                                </td>
                                <td>
                                <p className="mb-0 py-4">{formatCurrency(item.price)} $</p>
                                </td>
                                <td>
                                <div className="input-group quantity py-4" style={{width: 100}}>
                                    <div className="input-group-btn">
                                    
                                    <button className="btn btn-sm btn-minus rounded-circle btn-danger border" onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}>
                                        <i className="fa fa-minus" />
                                    </button>
                                    </div>
                                    <input
                                                    // type="number"
                                                    min="1"
                                                    max={item.stock || 1} // protección
                                                    value={item.cantidad}
                                                    onChange={(e) => {
                                                        const valor = parseInt(e.target.value);
                                                        // Validar rango
                                                        if (valor >= 1 && valor <= item.stock) {
                                                            actualizarCantidad(item.id, valor);
                                                        } else if (valor > item.stock) {
                                                            // ✅ SweetAlert: aviso de stock insuficiente
                                                            Swal.fire({
                                                                icon: 'warning',
                                                                title: 'Stock insuficiente',
                                                                text: `Solo hay ${item.stock} unidades disponibles.`,
                                                                confirmButtonText: 'Aceptar',
                                                                confirmButtonColor: '#0d6efd',
                                                            }).then(() => {
                                                                actualizarCantidad(item.id, item.stock);
                                                            });
                                                        } else if (valor < 1) {
                                                            // ✅ SweetAlert: confirmar eliminación
                                                            Swal.fire({
                                                                title: '¿Eliminar del carrito?',
                                                                text: 'Esta acción no se puede deshacer.',
                                                                icon: 'question',
                                                                showCancelButton: true,
                                                                confirmButtonText: 'Sí, eliminar',
                                                                cancelButtonText: 'Cancelar',
                                                                confirmButtonColor: '#dc3545',
                                                                cancelButtonColor: '#6c757d',
                                                            }).then((result) => {
                                                                if (result.isConfirmed) {
                                                                    eliminarDelCarrito(item.id);
                                                                } else {
                                                                    actualizarCantidad(item.id, 1);
                                                                }
                                                            });
                                                        }
                                                    }}
                                                    className="form-control form-control-sm w-25 me-2"
                                                />
                                    <div className="input-group-btn">
                                    <button className="btn btn-sm btn-plus rounded-circle btn-success border" onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}>
                                                        <i className="fa fa-plus" />
                                    </button>
                                    </div>
                                </div>
                                </td>
                                <td>
                                <p className="mb-0 py-4">{formatCurrency(item.price * item.cantidad)} $</p>
                                </td>
                                <td className="py-4">
                                <button className="btn btn-md rounded-circle bg-light border" onClick={() => eliminarDelCarrito(item.id)}>
                                                <i className="fa fa-times text-danger" />
                                            </button>
                                </td>
                            </tr>

                            ))
                        }
                    
                    </tbody>
                </table>
                </div>
                <div className="mt-5">
                <input type="text" className="border-0 border-bottom rounded me-5 py-3 mb-4" placeholder="Coupon Code" />
                <button className="btn btn-primary rounded-pill px-4 py-3" type="button">Apply Coupon</button>
                </div>
                <div className="row g-4 justify-content-end">
                <div className="col-8" />
                <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                    <div className="bg-light rounded">
                    <div className="p-4">
                        <h1 className="display-6 mb-4">Cart <span className="fw-normal">Total</span></h1>
                        <div className="d-flex justify-content-between mb-4">
                        <h5 className="mb-0 me-4">Subtotal:</h5>
                        <p className="mb-0">$96.00</p>
                        </div>
                        <div className="d-flex justify-content-between">
                        <h5 className="mb-0 me-4">Shipping</h5>
                        <div>
                            <p className="mb-0">Flat rate: $3.00</p>
                        </div>
                        </div>
                        <p className="mb-0 text-end">Shipping to Ukraine.</p>
                    </div>
                    <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                        <h5 className="mb-0 ps-4 me-4">Total</h5>
                        <p className="mb-0 pe-4">${formatCurrency(total)}</p>
                    </div>
                    <button className="btn btn-primary rounded-pill px-4 py-3 text-uppercase mb-4 ms-4" type="button">Proceed Checkout</button>
                    </div>
                </div>
                </div>
            </div>
            </div>

    </>
  )
}

export default MostrarCarrito