import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeButton from './ThemeButton'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className='navbar-brand' to="/">Principal</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Chamados
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/chamados">Lista de Chamados</Link></li>
                                <li><Link className="dropdown-item" to="/chamados/create">Criar Chamado</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/sobre">Sobre</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contato">Contato</NavLink>
                        </li>
                    </ul>
                    <ThemeButton />
                </div>
            </div>
        </nav>
    )
}

export default Navbar