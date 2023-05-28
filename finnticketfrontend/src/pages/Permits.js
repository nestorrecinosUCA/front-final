import React from 'react'
import ShortCutNavBar from '../components/ShortCutNavBar'
import PermitsTable from '../modules/PermitsPage/PermitsTable'

function Permits() {
    return (
        <>
            <ShortCutNavBar />
            <div className='mx-4 lg:mx-20 text-4xl mt-10 mb-4'>
                <a>Permisos de usuarios</a>
            </div>
            <div className='mx-4 border-b-2 lg:mx-20 lg:border-b-4 md:border-b-4 2xl:border-b-4 rounded' />
            <div className='mx-4 lg:mx-20 bg-card-white-grey rounded mt-2 mb-8 p-6 items-center border-4 '>
                <PermitsTable/> 
            </div>
        </>
    )
}

export default Permits