import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const URI = `http://localhost:8000/Users/`

const CompUserDetail = () => {
    const { id } = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUser()
    }, [id])

    const getUser = async () => {
        try {
            const res = await axios.get(URI + id)
            setUser(res.data)
        } catch (error) {
            console.error('Error fetching user:', error)
        }
    }

    if (!user) {
        return <p>Cargando usuario...</p>;
    }

    if (!Object.keys(user).length) {
        return <p>No se encontró el usuario.</p>;
    }

    return (
        <div className='container'>
            <h1>Detalles del Usuario</h1>
            <table className='table'>
                <tbody>
                    <tr>
                        <td>ID:</td>
                        <td>{user.id}</td>
                    </tr>
                    <tr>
                        <td>Nombre:</td>
                        <td>{user.nombre}</td>
                    </tr>
                    <tr>
                        <td>Correo:</td>
                        <td>{user.correo}</td>
                    </tr>
                    <tr>
                        <td>Fecha de Nacimiento:</td>
                        <td>{user.fechaNac}</td>
                    </tr>
                    <tr>
                        <td>Foto de Perfil:</td>
                        <td>{user.fotoPerfil}</td>
                    </tr>
                    <tr>
                        <td>Admin:</td>
                        <td>{user.admin ? 'Sí' : 'No'}</td>
                    </tr>
                    <tr>
                        <td>Rol:</td>
                        <td>{user.roles_id ? 'Administrador' : 'Cliente'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CompUserDetail
