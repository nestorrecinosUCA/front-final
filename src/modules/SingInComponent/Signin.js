import { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import iconlogo from '../../assets/img/iconlogo.png'
import { apiUrl } from '../../Constants/constans';

function Login() {
  const [credentials, setCredentials] = useState({});
  const [disableLogin, setDisableLogin] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value
    }));

    const { username = '', password = '' } = {
      ...credentials,
      [name]: value
    };
    if (username.trim() !== '' && password.trim() !== '') {
      setDisableLogin(false);
    } else {
      setDisableLogin(true);
    }
  };

  const handleLogin = () => {
    fetch( `${apiUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then((result) => {
        const token = result.token;
        // guardar el token en localStorage
        localStorage.setItem('token', token);

        // Redirigir al usuario a la página de Dashboard
        navigate('/homeWNavbar');
      })
      .catch((error) => {
        console.log('Error al realizar la solicitud:', error);
      });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-auto w-auto"
          src={iconlogo}
          alt="FinnTicket"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white ">
          INICIO DE SESION
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

        <form className="space-y-6" >

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white-box">
              Usuario
            </label>
            <div className="mt-2">
              <input
                type="text" required name="username"
                onChange={handleChange}
                className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                Contraseña
              </label>

            </div>
            <div className="mt-2">
              <input
                type="password" name="password"
                onChange={handleChange}
                required
                className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>

            <Link to={!disableLogin ? "/homeWNavbar" : "#"}>
              <button
                className="flex w-full justify-center rounded-md bg-gold px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-goldhov focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                type="submit"
                onClick={handleLogin}
                disabled={disableLogin}
              >
                Login
              </button>
            </Link>

          </div>
        </form>
        <div className="text-center mt-4">
          <p>No tienes una cuenta? <Link to="/signup"><button className="bg-red-500 hover:bg-red-600 text-white font-bold px-2 py-1 rounded-full">CREA UNA CUENTA</button></Link></p>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Login;