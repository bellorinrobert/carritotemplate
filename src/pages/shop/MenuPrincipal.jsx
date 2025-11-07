import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API = 'https://dummyjson.com/products/category-list';

const MenuPrincipal = () => {
    const [datos, setDatos] = useState([])
    const getDatos = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            //console.log(data)
            setDatos(data);
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, []);
    return (
        <>
            {datos && datos.map((item, index) => (
                <>
                    <div className="categories-item">

                        <li key={index}><Link to={`/shop/${item.slug}`} className="dropdown-item" href="#"><i className="fas fa-check text-secondary me-2" />{JSON.stringify(item)}</Link></li>
                    </div>
                </>
            ))}

        </>
    )
}

export default MenuPrincipal