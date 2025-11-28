import {  useMemo,  } from "react";
import { useCarrito } from "../context/CarritoContext";
import { formatCurrency, formatNumber } from "../util/funciones";

     
const CheackoutCart = () => {
    const { carrito } = useCarrito();


   

    // Calcular total cada vez que cambia el carrito
    const { total, totalItems } = useMemo(() => {
        const total = carrito.reduce((acc, item) => acc + (item.price * item.cantidad), 0);
        const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
        return { total, totalItems };
    }, [carrito]);
    return (
        <table className="table">
            <thead>
                <tr className="text-center">
                    <th scope="col" className="text-start">Name</th>
                    <th scope="col">Model</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                {carrito.map((item) => (
                    <tr className="text-center">
                        <th scope="row" className="text-start py-4">
                            {item.title}
                        </th>
                        <td className="py-4">{item.sku}</td>
                        <td className="py-4">${formatCurrency(item.price)}</td>
                        <td className="py-4 text-center">{formatNumber(item.cantidad)}</td>
                        <td className="py-4">${formatCurrency(item.price * item.cantidad)}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr className="fw-bold">
                    <td colspan="3" class="text-end">Total</td>
                    <td className="text-center">{formatNumber(totalItems)}</td>
                    <td className="text-center">{formatCurrency(total)}</td>
                </tr>
            </tfoot>
        </table>
    )
}

export default CheackoutCart