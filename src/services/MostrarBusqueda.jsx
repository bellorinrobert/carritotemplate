import { useEffect, useState, useCallback } from "react";
import CardProduct1 from "../pages/shop/Cardproduct1";
import { formatCurrency } from "../util/funciones";
import { Link } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
const API = 'https://dummyjson.com/products/search?q=';

const MostrarBusqueda = ({ txtBuscar }) => {
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
      const { carrito, agregarAlCarrito  } = useCarrito();
    const URI = API + txtBuscar;
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
    }, [txtBuscar]);
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
            <CardProduct1 key={item.id} item={item}/>
        ))}
    
    </>
    )
}

export default MostrarBusqueda