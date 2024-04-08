import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/Genres';

const ProductsByGenre = () => {
    const [genreCounts, setGenreCounts] = useState([]);

    useEffect(() => {
        getGenreCounts();
    }, []);

    const getGenreCounts = async () => {
        try {
            const res = await axios.get(URI);
            const genres = res.data;
            setGenreCounts(genres);
        } catch (error) {
            console.error('Error fetching genre counts:', error);
        }
    };

    return (
        <div className='container'>
            <h1>Productos por Género</h1>
            <table className='table'>
                <thead className='table-primary'>
                    <tr>
                        <th>Género</th>
                        <th>Cantidad Total</th>
                        <th>Ver Lista</th>
                    </tr>
                </thead>
                <tbody>
                    {genreCounts.map((genre) => (
                        <tr key={genre.idGenero}>
                            <td>{genre.genero}</td>
                            <td>{genre.count}</td>
                            <td>
                                <Link to={`/Genres/${genre.idGenero}`}>
                                    <button className='btn btn-info'>Ver Lista</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsByGenre;
