import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../../Constants/constans';

function EventCard({ eventData }) {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    };
    return (


        <div className="card shadow-lg rounded-lg overflow-hidden bg-base-100 hover:bg-base-200 transition duration-300 ease-in-out">
            {eventData && (
                <>
                    <img
                        className="w-72 h-48 object-cover transform hover:scale-95 hover:opacity-75 transition duration-500 ease-in-out rounded-t-lg"
                        src={eventData.image}
                        alt={eventData.title}
                    />
                    <div className="p-4">
                        <h2 className="text-sm mb-2">{eventData.title}</h2>
                        <h2 className="text-sm mb-2 mt-4">{formatDate(eventData.date)} - HORA: {eventData.hour}</h2>
                    </div>
                </>
            )}
        </div>


    );
}


function HomeCard2() {
    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                // Obtener el token del local storage
                const token = localStorage.getItem('token');

                // Hacer la petición a la API con el token en el encabezado de autorización
                const response = await axios.get(`${apiUrl}/events`, {
                    headers: {
                    },
                });

                // Guardar los datos de los eventos en el estado del componente
                setEventData(response.data);
            } catch (error) {
                console.error('Error al obtener los datos de los eventos:', error);
            }
        };

        fetchEventData();
    }, []);

    return (
        <div class="flex items-center justify-center mb-6 z-10 p-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10">
                {eventData.length > 0 && <EventCard eventData={eventData[0]} />}
                {eventData.length > 1 && <EventCard eventData={eventData[1]} />}
                {eventData.length > 2 && <EventCard eventData={eventData[2]} />}
                {eventData.length > 3 && <EventCard eventData={eventData[3]} />}
                {eventData.length > 4 && <EventCard eventData={eventData[4]} />}
                {eventData.length > 5 && <EventCard eventData={eventData[5]} />}
                {eventData.length > 6 && <EventCard eventData={eventData[6]} />}
                {eventData.length > 7 && <EventCard eventData={eventData[7]} />}
            </div>
        </div>
    );
}

export default HomeCard2
