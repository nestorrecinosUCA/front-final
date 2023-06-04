import React from 'react'
import ShortCutNavBar from '../components/ShortCutNavBar'
import MGEF from '../assets/img/MGEF.jpg'
import Information from '../modules/EventDeploy/Information'

function Analysis() {
    return (
        <>
            <ShortCutNavBar />
            <div className='mx-4 lg:mx-20 text-4xl mt-10 mb-4'>
                <a>Analisis del evento </a>
            </div>
            <div className='mx-4 border-b-2 lg:mx-20 lg:border-b-4 md:border-b-4 2xl:border-b-4 rounded' />
            <div className='mx-4 lg:mx-20 bg-card-white-grey rounded mt-2 mb-8 p-6 items-center border-4 '>
                <div className='mx-4 lg:mx-20'>
                    <div className='rounded mt-2 mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-6 items-center'>
                        <div className='mb-4 sm:mb-0 sm:mr-2 md:mr-5 px-5 lh:mx-8 lg:mr-5 lg:px-5'>
                            <img src={MGEF} alt="Artist" className="rounded-xl h-auto max-h-60 max-w-full mx-auto sm:h-full sm:w-full lg:h-auto lg:w-auto" />
                        </div>
                        <div className='mx-0 md:mx-8 lg:mx-8 2xl:mx-8 col-span-2 sm:col-span-3 '>
                            <Information />
                        </div>
                    </div>
                </div>
                <div className='px-20 text-center lg:px-80 mb-8'>
                    <div>
                        <a>Flujo del evento</a>
                    </div>
                    <div className='border-b-4' />
                </div>
                <div className='grid  sm:grid-cols-2 sm:grid-rows-1 lg:grid-cols-4 lg:grid-rows-3 gap-4'>
                    <div className='flex border-4 rounded w-full text-center col-span-2'>
                        <p className='bg-black px-4 py-2 w-full'>Tickets vendidos</p>
                        <p className='px-4 py-4 w-full'>20</p>
                    </div>
                    <div className='flex border-4 rounded w-full text-center col-span-2'>
                        <p className='bg-black px-4 py-2 w-full'>Asistencia</p>
                        <p className='px-4 py-4 w-full'>20</p>
                    </div>
                    <div className='flex border-4 rounded text-center row-span-2 col-span-2 '>
                        <p className='bg-black px-4 py-2 justify-center h-full '>Localidades Populares</p>
                        <div className='text-start'>
                            <p className='px-4 py-4'>1.Astronomic</p>
                            <p className='px-4 py-4'>2.Platino</p>
                            <p className='px-4 py-4'>3.Juan</p>
                        </div>
                    </div>
                    <div className='flex border-4 rounded w-full text-center col-span-2'>
                        <p className='bg-black px-4 py-2 w-full'>% Personas en grupo</p>
                        <p className='px-4 py-4 w-full'>20</p>
                    </div>
                    <div className='flex border-4 rounded w-full text-center col-span-2'>
                        <p className='bg-black px-4 py-2 w-full'>% Personas solas</p>
                        <p className='px-4 py-4 w-full'>20</p>
                    </div>
                </div>
                <div className='px-20 text-center lg:px-80 mb-8 mt-14'>
                    <div>
                        <a>Gráfica</a>
                    </div>
                    <div className='border-b-4' />
                    
                </div>
                <div className='w-full text-end'>
                    <button className='w-40 bg-gold border-2 rounded h-12 text-lg font-semibold'>Exportar pdf</button>
                </div>
                
            </div>
        </>
    )
}

export default Analysis