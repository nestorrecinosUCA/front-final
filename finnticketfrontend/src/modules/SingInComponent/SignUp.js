import React from 'react';
import iconlogo from '../../assets/img/iconlogo.png';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-auto w-auto"
                        src={iconlogo}
                        alt="FinnTicket"
                    />
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        REGISTRO DE USUARIO
                    </h2>
                </div>

                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-4" action="#" method="POST">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-white-box">
                                    Nombre
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-white-box">
                                    Apellido
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="lastname"
                                        name="lastname"
                                        type="text"
                                        autoComplete="lastname"
                                        required
                                        className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white-box">
                                    Correo Electrónico
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone_number" className="block text-sm font-medium leading-6 text-white-box">
                                    Número de teléfono
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="phone_number"
                                        name="phone_number"
                                        type="tel"
                                        placeholder="####-####"
                                        autoComplete="tel"
                                        required
                                        className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">

                            <div>
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-white-box">
                                    Nombre de usuario
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="username"
                                        required
                                        className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>



                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                    Contraseña
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="new-password"
                                        required
                                        className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-white">
                                    Confirmar contraseña
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="confirm_password"
                                        name="confirm_password"
                                        type="password"
                                        autoComplete="new-password"
                                        required
                                        className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <Link to="/">
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-gold px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-goldhov focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Registrarse
                                </button>
                            </Link>
                        </div>
                    </form>

                    <div className="text-center mt-4">
                        <p>
                            ¿Ya tienes una cuenta?{' '}
                            <Link to="/signin" className="text-red-500 hover:text-red-600">
                                Inicia sesión
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;

