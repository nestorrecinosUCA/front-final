import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import iconlogo from '../assets/img/logo.png';

function Navbar() {
    const handleDropdown = () => {
        const dropdownContent = document.getElementById('dropdown-content');
        dropdownContent.classList.toggle('hidden');
    };

    const navigate = useNavigate();

    const handleOut = () => {
        localStorage.removeItem('token');
        toast.error('Sesión terminada', {
            autoClose: 500,
            closeButton: false,
        });
        navigate('/');
    };

    return (
        <>
            <div className="sticky top-0 z-10 navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <button
                            tabIndex="0"
                            className="btn btn-ghost lg:hidden"
                            onClick={handleDropdown}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>
                        <ul
                            id="dropdown-content"
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52 font-sans font-bold hidden"
                        >
                            <li>
                                <Link to="/option1">
                                    <a>Opción 1</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/option2">
                                    <a>Opción 2</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <img className="w-52 h-auto" src={iconlogo} alt="Logo" />
                </div>

                {/* MENU FULL SCREEN */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-sans font-bold">
                        <li>
                            <Link to="/homeWNavbar">
                                <a>Inicio</a>
                            </Link>
                        </li>
                        <li>
                            <a>
                                Eventos
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </a>
                            <ul className="p-2">
                                <li className="bg-base-200">
                                    <Link to="/allEvents">
                                        <a>Eventos</a>
                                    </Link>
                                </li>
                                <li className="bg-base-200">
                                    <Link to="/purchasedTicket">
                                        <a>Tickets Comprados</a>
                                    </Link>
                                </li>
                                <li className="bg-base-200">
                                    <Link to="/personalHistory">
                                        <a>Historial Eventos</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a>
                                Moderadores
                            </a>
                        </li>

                        <li>
                            <a>
                                Administracion
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </a>
                            <ul className="p-2">
                                <li className="bg-base-200">
                                    <Link to="/permits">
                                        <a>Permisos</a>
                                    </Link>
                                </li>
                                <li className="bg-base-200">
                                    <Link to="/createEvent">
                                        <a>Agregar Evento</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <Outlet />
                </div>

                <div className="navbar-end">
                    
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center" onClick={handleOut}>
                            <img
                                className="w-6 h-6 rounded-full"
                                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                                alt="Imagen de persona logueada"
                            />
                        </div>
                </div>
                <Outlet />
            </div>
            
        </>
    );
}

export default Navbar;
