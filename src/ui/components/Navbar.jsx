import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import './navbar.css';

export const Navbar = () => {

    const navigate = useNavigate();
    const { user, logout } = useContext( AuthContext );

    const onLogout = () => {

        logout();
        
        navigate( '/login', {
            replace: true,
        });

    }

    return (
        <nav className="navbar navbar-expand-sm">
            <Link className="navbar-brand" to="/">
                <img className="navbar_logo" src="./logos/logotexto.svg" alt="Logo de marvel" />
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => `nav-link nav-item ${ isActive ? 'active' : '' }` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-link nav-item ${ isActive ? 'active' : '' }` }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-link nav-item ${ isActive ? 'active' : '' }` }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        <span>{ user?.name }</span>
                        <img src="./icons/feliz.svg" alt="icono usuario" />
                    </span>

                    <button
                        className="navbar_btn_logout"
                        onClick={ onLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}