import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductListByGenre = () => {
  const [products, setProducts] = useState([]);
  const [genreName, setGenreName] = useState('');
  const { id } = useParams();

  useEffect(() => {
    fetchProducts();
  }, [id]);

  const fetchProducts = async () => {
    try {
      let genreName = '';
      if (id === '1') {
        genreName = 'Comics';
      } else if (id === '2') {
        genreName = 'Manga';
      } else {
        // Manejar otros casos aquí si es necesario
        genreName = 'Desconocido';
      }
      setGenreName(genreName)
      const res = await axios.get(`http://localhost:8000/Genres/${id}`);
      setProducts(res.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className='container'>
      <h1>Lista de Productos  {genreName}</h1>
      <table className='table'>
        <thead className='table-primary'>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
       
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nombreProd}</td>
              <td>{product.descripcion}</td>
              <td>${product.precio}</td>
         
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListByGenre;
