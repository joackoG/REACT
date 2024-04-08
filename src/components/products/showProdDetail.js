import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const URI = `http://localhost:8000/Products/`

const CompProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProduct()
    }, [id])

    const getProduct = async () => {
        try {
            const res = await axios.get(URI + id)
            setProduct(res.data)
        } catch (error) {
            console.error('Error fetching product:', error)
        }
    }

    if (!product) {
        return <p>Cargando producto...</p>;
    }

    if (!Object.keys(product).length) {
        return <p>No se encontró el producto.</p>;
    }

    const getGenero = () => {
        return product.generos_idGenero === 1 ? 'Manga' : 'Comic';
    }

    // Calcular el precio con descuento aplicado
    const precioOriginal = parseFloat(product.precio);
    const descuento = parseFloat(product.descuento);
    const precioConDescuento = precioOriginal * (1 - descuento / 100);

    return (
        <div className='container'>
            <h1>Detalles del Producto</h1>
            <table className='table'>
                <tbody>
                    <tr>
                        <td>Nombre:</td>
                        <td>{product.nombreProd}</td>
                    </tr>
                    <tr>
                        <td>Descripción:</td>
                        <td>{product.descripcion}</td>
                    </tr>
                    <tr>
                        <td>Precio Original:</td>
                        <td>${precioOriginal.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Precio con Descuento:</td>
                        <td>${precioConDescuento.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Descuento:</td>
                        <td>{descuento}%</td>
                    </tr>
                    <tr>
                        <td>Stock:</td>
                        <td>{product.stock}</td>
                    </tr>
                    <tr>
                        <td>Autor:</td>
                        <td>{product.autor}</td>
                    </tr>
                    <tr>
                        <td>Género:</td>
                        <td>{getGenero()}</td>
                    </tr>
                    <tr>
                        <td>Imagen:</td>
                        <td><img src={product.image} alt={product.nombreProd} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CompProductDetail
