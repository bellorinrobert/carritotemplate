import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API='https://dummyjson.com/products/categories';

const MenuSecundario = ({inicio=0, elementos=10}) => {
    const [datos, setDatos] = useState([])
   
    const getDatos = async () =>{
        try {
          const response = await fetch(API);
          const data = await response.json();
          //console.log(data)
          setDatos(data);
        } catch (error) {
          console.error(error)
        }
      };
      useEffect(()=>{
        getDatos();
      },[]);
  return (
        <>
        

        {datos && datos.slice(inicio,elementos).map((item, index) => (
            
                <div key={index} className="additional-product-item">
                    <Link to={`/shop/${item.slug}/${item.name}`}>
                        <input type="radio" className="me-2" id={item.slug} name="categoria1" value="Beverages" />
                        <label htmlFor={item.slug} className="text-dark">   {item.name}</label>
                    </Link>             
                </div>

          ))}
    
    </>
  )
}

export default MenuSecundario