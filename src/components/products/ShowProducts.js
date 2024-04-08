import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const URI = 'http://localhost:8000/products'

const CompShowProducts = () => {
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        getproducts()
    }, [])

    const getproducts = async () => {
        try {
            const res = await axios.get(URI)
            setProductos(res.data)
        } catch (error) {
            console.error('Error fetching users:', error)
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>Product List</h1>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Name</th>
                                <th>autor</th>
                                <th>precio</th>
                                <th>Detalle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto) => (
                                <tr key={producto.id}>
                                    <td>{producto.nombreProd}</td>
                                    <td>{producto.autor}</td>
                                    <td>{producto.precio}</td>
                                    <td>
                                        <Link to={`/Produts/detail/${producto.id}`} className='btn btn-info'>Detalle</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowProducts
