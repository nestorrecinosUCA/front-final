import React, { useState } from 'react';
import iconlogo from '../../assets/img/iconlogo.png';
import { useNavigate, Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handlePass = () => {
        setPassword('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: name,
            lastname: lastname,
            phoneNumber: phoneNumber,
            username: username,
            email: email,
            password: password
        };

        // Password format validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!¡¿?])[A-Za-z\d@#$%^&+=!¡¿?]{8,}$/;
        if (!passwordRegex.test(password)) {
            toast.error('La contraseña no cumple con el formato requerido.', {
                autoClose: 700,
                closeButton: false,
            });
            handlePass();
            return;
        }

        fetch(`${apiUrl}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Error en la respuesta de la petición.');
            })
            .then(data => {
                toast.success('Usuario creado', {
                    autoClose: 700,
                    closeButton: false,
                });
                navigate('/');
                console.log(data);
            })
            .catch(error => {
                console.log(error);
                toast.warning('El usuario ya existe!', {
                    autoClose: 700,
                    closeButton: false,
                });
                navigate('/signup');
                console.log(data);
            });
    };

    return (
        <>
            <ToastContainer position="top-right" />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
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
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-white-box">
                                    Nombre
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        type="text"
                                        autoComplete="name"
                                        value={name} onChange={(e) => setName(e.target.value)}
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
                                        type="text"
                                        autoComplete="lastname"
                                        value={lastname} onChange={(e) => setLastname(e.target.value)}
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
                                        type="email"
                                        autoComplete="email"
                                        value={email} onChange={(e) => setEmail(e.target.value)}
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
                                        type="tel"
                                        placeholder="####-####"
                                        autoComplete="tel"
                                        value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                                        required
                                        className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">

                            <div>
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-white-box">
                                    Nombre de usuario
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="username"
                                        type="text"
                                        autoComplete="username"
                                        value={username} onChange={(e) => setUsername(e.target.value)}
                                        required
                                        className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                    Contraseña
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        type="password"
                                        autoComplete="new-password"
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                        </div>

                        <div>
                            <button type="submit"
                                className="flex w-full justify-center rounded-md bg-gold px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-goldhov focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Registrarse
                            </button>
                        </div>
                    </form>

                    <div className="text-center mt-4">
                        <p>
                            ¿Ya tienes una cuenta?{' '}
                            <Link to="/signin" className="bg-red-500 hover:bg-red-600 text-white font-bold px-2 py-1 rounded-full">
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

