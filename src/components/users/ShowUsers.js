import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/Users/'

const CompShowUsers = () => {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        try {
            const res = await axios.get(URI)
            setUsuarios(res.data)
        } catch (error) {
            console.error('Error fetching users:', error)
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>Lista de usuarios</h1>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Detalle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.correo}</td>
                                    <td>
                                        <Link to={`/Users/detail/${usuario.id}`} className='btn btn-info'>Detalle</Link>
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

export default CompShowUsers
