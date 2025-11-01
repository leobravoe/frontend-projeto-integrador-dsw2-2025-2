import React from 'react'
import Navbar from "../../components/Navbar"
import { Link } from 'react-router-dom'

const ChamadosCreate = () => {
    return (
        <div>
            <Navbar />
            <h3>ChamadosCreate</h3>
            <Link to="/chamados" className='btn btn-primary'>Voltar</Link>
        </div>
    )
}

export default ChamadosCreate