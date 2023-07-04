import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom'
import { SnackbarProvider, enqueueSnackbar } from 'notistack'
import Swal from "sweetalert2";
import axios from 'axios';
import { apiUrl } from '../Constants/constans';


function CreateEvent() {
    //saving token
    const token = localStorage.getItem('token');
    //variables
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [duration, setDuration] = useState('');
    const [image, setImage] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [assistantsCapacity, setAssistantsCapacity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: title,
            description: description,
            date: date,
            hour: hour,
            duration: duration,
            image: image,
            categoryId: categoryId,
            assistantsCapacity: assistantsCapacity
        };

        fetch(`${apiUrl}/events`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`,
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
                console.log(data);
                // Realizar las acciones adicionales necesarias después de un registro exitoso
                enqueueSnackbar("Evento guardado con exito!", {
                    variant: "success",
                })
            })
            .catch(error => {
                console.log(error);
                // Manejar el error en caso de que ocurra
                enqueueSnackbar("Error, no se ha podido agregar el evento!", {
                    variant: "failure",
                })
            });
    };



    const saveEvent = () => {
        enqueueSnackbar("Evento guardado con exito!", {
            variant: "success",
        })
    }

    const saveLocation = () => {
        enqueueSnackbar("localidad agregada!", {
            variant: "info",
        })
    }

    //date
    const [dateValue, setDateValue] = useState('');

    const handleDateChange = (e) => {
        const value = e.target.value;
        setDateValue(value);

        setDate(value);
        console.log(date);
        console.log(value);

    };
    //category
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${apiUrl}/categories`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setCategories(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const handleCategoriaChange = (event) => {
        const selectedCategoryId = event.target.value;
        console.log(selectedCategoryId);
        setCategoryId(selectedCategoryId);
      };

    return (
        <>
            <SnackbarProvider autoHideDuration={1000}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }} />

            <section class="max-w-4xl p-6 mx-auto bg-gray-500 rounded-md shadow-md dark:bg-gray-600 mt-4">
                <h1 class="text-xl font-bold text-white capitalize dark:text-white">Crear Evento</h1>

                <div class="flex justify-end">
                    <Link to="/homeWNavbar">
                        <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-800">Regresar</button>
                    </Link>
                </div>

                <form onSubmit={handleSubmit}>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        {/*Title*/}
                        <div>
                            <label class="text-white dark:text-gray-200">Titulo</label>
                            <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        {/*Description*/}
                        <div>
                            <label class="text-white dark:text-gray-200">Descripcion</label>
                            <input id="description" value={description} onChange={(e) => setDescription(e.target.value)} required type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        {/*Image*/}
                        <div>
                            <label class="text-white dark:text-gray-200">Url de imagen</label>
                            <input id="image" value={image} onChange={(e) => setImage(e.target.value)} required type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        {/*Date*/}
                        <div>
                            <label className="text-white dark:text-gray-200">Fecha</label>
                            <input
                                id="date"
                                type="date"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                value={dateValue}
                                onChange={handleDateChange}
                            />
                        </div>
                        {/*Hour*/}
                        <div>
                            <label class="text-white dark:text-gray-200">hora</label>
                            <input id="hour" value={hour} onChange={(e) => setHour(e.target.value)} required type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        {/*Duration*/}
                        <div>
                            <label class="text-white dark:text-gray-200">Duracion</label>
                            <input id="duration" value={duration} onChange={(e) => setDuration(e.target.value)} required type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        {/*AssistantsCapacity*/}
                        <div>
                            <label class="text-white dark:text-gray-200">Capacidad de evento</label>
                            <input id="assistantsCapacity" value={assistantsCapacity} onChange={(e) => setAssistantsCapacity(e.target.value)} required type="number" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        {/*Category*/}
                        <div>
                            <label class="text-white dark:text-gray-200">Categoria</label>
                            <select
                                class="appearance-none block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                name="categoryId"

                                onChange={handleCategoriaChange}
                            >
                                <option value="">Elige una opcion </option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>



                        <div>
                            <label class="text-white dark:text-gray-200" >Involucrados</label>
                            <select class="appearance-none block w-full px-4 py-2 mt-2.5 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                <option disabled selected>Elige un opcion</option>
                                <option>Douglas Albeño</option>
                                <option>Cristian Hernández</option>
                                <option>Josue Patita</option>
                                <option>Nestor Applaudo</option>
                            </select>
                        </div>
                       
                        <div>
                            <label class="text-white dark:text-gray-200">Patrocinadores</label>
                            <select class="appearance-none block w-full px-4 py-2 mt-2.5 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                <option disabled selected>Elige un opcion</option>
                                <option>Pan la tecleña</option>
                                <option>Teleton</option>
                                <option>Applaudo Studios xd</option>
                                <option>Douglas</option>
                            </select>
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
                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button onClick={handleSubmit} class="btn px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-newGreen rounded-md hover:bg-newGreen2">guardar</button>
                                                </div>
                </div>
            </section>

            {/*AGREGANDO LOCALIDADES*/}
            <section class="max-w-4xl p-6 mx-auto bg-gray-500 rounded-md shadow-md dark:bg-gray-600 mt-4 mb-4">
                <h2 class="text-lg font-semibold text-white dark:text-gray-200 capitalize">Localidades</h2>

                <form>
                    <div class="grid grid-cols-1 gap-2 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-white dark:text-gray-200">Nombre de localidad</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label class="text-white dark:text-gray-200">Precio</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div class="items-center justify-center">
                            <label class="text-white dark:text-gray-200">Cantidad de asientos</label>
                            <input type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                    </div>
                </form>

                <div class="flex justify-end mt-4">
                    <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-newGreen rounded-md hover:bg-newGreen2"
                        onClick={saveLocation}>Agregar</button>
                </div>

                <div>
                    <div class="mx-4 border-b-2 lg:mx-20 lg:border-b-4 md:border-b-4 2xl:border-b-4 rounded mt-10" />
                    <div class="flex flex-col mt-4 bg-gray-800 dark:bg-gray-800 rounded-md">
                        <div class="-m-1.5 overflow-x-auto rounded-md">
                            <div class="p-1.5 min-w-full inline-block align-middle rounded-md">
                                <div class="border overflow-hidden dark:border-gray-700 rounded-md">
                                    <table class=" min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-md">
                                        <thead>
                                            <tr>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase">NOMBRE LOCALIDAD</th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase">PRECIO</th>
                                                <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase">CANTIDAD</th>
                                                <th scope="col" class="px-6 py-3 text-right text-xs font-bold text-gray-400 uppercase">ACCIONES</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white dark:text-gray-200">TRIBUNA</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-white dark:text-gray-200">$45</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-white dark:text-gray-200">200</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a class="text-blue-500 hover:text-blue-700" href="#">Eliminar</a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white dark:text-gray-200">VIP</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-white dark:text-gray-200">$150</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-white dark:text-gray-200">90</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a class="text-blue-500 hover:text-blue-700" href="#">Eliminar</a>
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