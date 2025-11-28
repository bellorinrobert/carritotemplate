import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = 'https://dummyjson.com/products/categories';

const MenuSecundario = ({ inicio = 0, elementos = 10 }) => {
  const [datos, setDatos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // ✅ Estado para el radio seleccionado

  const getDatos = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setDatos(data);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);

  const handleRadioChange = (slug) => {
    setSelectedCategory(slug);

  };

  return (
    <>
      {datos.slice(inicio, elementos).map((item, index) => (
        <div key={item.slug || index} className="additional-product-item">
          <Link to={`/shop/${item.slug}/${item.name}`} className="d-flex align-items-center"
            onClick={() => { handleRadioChange(item.slug); }}>
            <input
              type="radio"
              className="me-2"
              id={`radio-${item.slug}`}
              name="category" // 👈 Mismo name para todos = grupo de radios
              value={item.slug}
              checked={selectedCategory === item.slug}
              onChange={() => handleRadioChange(item.slug)}
            />
            <label htmlFor={`radio-${item.slug}`} className="text-dark mb-0">
              {item.name}
            </label>
          </Link>
        </div>
      ))}
    </>
  );
};

export default MenuSecundario;