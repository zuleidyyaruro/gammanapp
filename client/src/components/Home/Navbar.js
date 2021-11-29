import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Gamman App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/nuestros-proyectos" className="nav-link">Proyectos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sobre-nosotros"className="nav-link">Sobre Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacto" className="nav-link">Contacto</Link>
                        </li>
                    </ul>
                    <Link to="/login" className="text-black nav-link">Login</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
