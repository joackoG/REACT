import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/Products/last/';

const ShowLatestProduct = () => {
    const [latestProduct, setLatestProduct] = useState(null);

    useEffect(() => {
        fetchLatestProduct();
    }, []);

    const fetchLatestProduct = async () => {
        try {
            const res = await axios.get(URI);
            setLatestProduct(res.data);
        } catch (error) {
            console.error('Error fetching latest product:', error);
        }
    };

    return (
        <div className='container'>
            <h2>Latest Product</h2>
            {latestProduct && (
                <div>
                    <p><strong>ID:</strong> {latestProduct.id}</p>
                    <p><strong>Name:</strong> {latestProduct.nombreProd}</p>
                    <p><strong>Description:</strong> {latestProduct.descripcion}</p>
                    <p>
                        <Link to={`/Produts/detail/${latestProduct.id}`} className='btn btn-info'>
                            View Details
                        </Link>
                    </p>
                </div>
            )}
        </div>
    );
};

export default ShowLatestProduct;
