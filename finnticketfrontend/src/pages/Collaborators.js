import React from 'react'
import ShortCutNavBar from '../components/ShortCutNavBar'
import MGEF from '../assets/img/MGEF.jpg'
import Information from '../modules/EventDeploy/Information'
import CollabTable from '../modules/Collaborators/CollabTable'

function Collaborators() {
    return (
        <>
            <ShortCutNavBar />
            <div className='mx-4 lg:mx-20 text-4xl mt-10 mb-4'>
                <a>Collaboradores del evento </a>
            </div>
            <div className='mx-4 border-b-2 lg:mx-20 lg:border-b-4 md:border-b-4 2xl:border-b-4 rounded' />
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
            <div className="mx-4 lg:mx-20 flex justify-end mt-2">
                <div class="relative w-60 sm:w-auto">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        class="pl-10 pr-4 py-2 rounded-full w-60 sm:w-96 border-gray-300 text-gray-800  focus:outline-none"
                        placeholder="Buscar un usuario"
                    />
                </div>
            </div>
            <div className='mx-4 lg:mx-20 bg-card-white-grey rounded mt-2 mb-8 p-6 items-center border-4 '>
                <CollabTable />
            </div>

        </>
    )
}

export default Collaborators