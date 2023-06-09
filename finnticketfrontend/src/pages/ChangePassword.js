import React from 'react'
import iconlogo from '../assets/img/iconlogo.png'

function ChangePassword() {
    return (
        <>

            <div className='flex justify-center items-center min-h-screen'>
                <div className='bg-card-grey mx-auto w-2/5 lg:mx-60 lg:my-36 rounded-sm border-2 border-white flex flex-row justify-center mid-h-screen items-center'>
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <img
                            className="mx-auto h-auto w-auto"
                            src={iconlogo}
                            alt="FinnTicket"
                        />
                        <div className='text-center'>
                            <h1 className='text-2xl font-bold mb-5'>
                                Cambiar contraseña
                            </h1>
                        </div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                Contraseña actual
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-2 mb-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                Nueva contraseña
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-2 mb-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                Confirmar contraseña
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-2 mb-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div className='justify-center flex'>
                                <button
                                    type="submit"
                                    className="flex w-1/2 mt-8 justify-center rounded-md bg-gold px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-goldhov focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Aceptar
                                </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ChangePassword