import React from 'react'
import ShortCutNavBar from '../components/ShortCutNavBar'
import ModTable from '../modules/Mod/ModTable'

function Mod() {
    return (
        <>
            <ShortCutNavBar />
            <div className='mx-4 lg:mx-20 text-4xl mt-10 mb-4'>
                <a>Moderador | Bloqueo de usuarios </a>
            </div>
            <div className='mx-4 border-b-2 lg:mx-20 lg:border-b-4 md:border-b-4 2xl:border-b-4 rounded' />
            <div className='mx-4 lg:mx-20 bg-card-white-grey rounded mt-2 mb-8 p-6 items-center border-4 '>
                <ModTable />

            </div>
        
        </>
    )
}

export default Mod