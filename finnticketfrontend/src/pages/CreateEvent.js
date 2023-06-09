import React from 'react';
import { Outlet, Link } from 'react-router-dom'
import Swal from "sweetalert2";



function CreateEvent() {

    const saveEvent = () => {
        Swal.fire({
            title: 'Evento guardado',
            icon: 'success'
        })
    }

    const saveLocation = () => {
        Swal.fire({
            title: 'Localidad guardada',
            icon: 'success'
        })
    }

    return (
        <>
            <section class="max-w-4xl p-6 mx-auto bg-gray-500 rounded-md shadow-md dark:bg-gray-600 mt-4">
                <h1 class="text-xl font-bold text-white capitalize dark:text-white">Crear Evento</h1>

                <div class="flex justify-end">
                    <Link to="/homeWNavbar">
                        <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-800">Regresar</button>
                    </Link>
                </div>

                <form>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-white dark:text-gray-200" for="username">Titulo</label>
                            <input id="password" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label class="text-white dark:text-gray-200" for="emailAddress">Categoria</label>
                            <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                <option disabled selected>Elige un opcion</option>
                                <option>Cine</option>
                                <option>Baile</option>
                                <option>Musica</option>
                                <option>Deportes</option>
                            </select>
                        </div>

                        <div>
                            <label class="text-white dark:text-gray-200" for="password">Hora</label>
                            <input id="password" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label class="text-white dark:text-gray-200" for="passwordConfirmation">Duracion</label>
                            <input id="range" type="range" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-800 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label class="text-white dark:text-gray-200" for="passwordConfirmation">Involucrados</label>
                            <select class="block w-full px-4 py-2 mt-2.5 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                <option disabled selected>Elige un opcion</option>
                                <option>Douglas Albeño</option>
                                <option>Cristian Hernández</option>
                                <option>Josue Patita</option>
                                <option>Nestor Applaudo</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-white dark:text-gray-200" for="passwordConfirmation">Date</label>
                            <input id="date" type="date" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-white">
                                Image
                            </label>
                            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div class="space-y-1 text-center">
                                    <svg class="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <div class="flex text-sm text-gray-600">
                                        <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" >
                                            <span class="">Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                        </label>
                                        <p class="pl-1 text-white">or drag and drop</p>
                                    </div>
                                    <p class="text-xs text-white">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>

                <div class="flex justify-end mt-6">
                    <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-newGreen rounded-md hover:bg-newGreen2"
                        onClick={saveEvent}>Guardar</button>
                </div>
            </section>

            {/*AGREGANDO LOCALIDADES*/}
            <section class="max-w-4xl p-6 mx-auto bg-gray-500 rounded-md shadow-md dark:bg-gray-600 mt-4 mb-4">
                <h2 class="text-lg font-semibold text-white dark:text-gray-200 capitalize">Localidades</h2>

                <form>
                    <div class="grid grid-cols-1 gap-2 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-white dark:text-gray-200" for="username">Nombre de localidad</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label class="text-white dark:text-gray-200" for="emailAddress">Precio</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div class="items-center justify-center">
                            <label class="text-white dark:text-gray-200" for="emailAddress">Cantidad de asientos</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                    </div>
                </form>

                <div class="flex justify-end mt-4">
                    <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-newGreen rounded-md hover:bg-newGreen2"
                        onClick={saveLocation}>Agregar</button>
                </div>

                <div>
                    <div class="mx-4 border-b-2 lg:mx-20 lg:border-b-4 md:border-b-4 2xl:border-b-4 rounded mt-10"/>
                    <div class="flex flex-col mt-4 bg-gray-800 dark:bg-gray-800 rounded-md">
                        <div class="-m-1.5 overflow-x-auto rounded-md">
                            <div class="p-1.5 min-w-full inline-block align-middle rounded-md">
                                <div class="border overflow-hidden dark:border-gray-700 rounded-md">
                                    <table class=" min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-md">
                                        <thead>
                                            <tr>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
                                                <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white dark:text-gray-200">John Brown</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-white dark:text-gray-200">45</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-white dark:text-gray-200">New York No. 1 Lake Park</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white dark:text-gray-200">Jim Green</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-white dark:text-gray-200">27</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-white dark:text-gray-200">London No. 1 Lake Park</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white dark:text-gray-200">Joe Black</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-white dark:text-gray-200">31</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-white dark:text-gray-200">Sidney No. 1 Lake Park</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Outlet />
        </>
    )
}

export default CreateEvent