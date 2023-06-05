import React from 'react'

function PInfoCard() {
    return (
        <>  
        
            <div className='bg-card-grey w-full sm:w-full rounded-lg p-4 lg:p-6 shadow shadow-gray-400 transform hover:bg-gray-900 duration-200 '>
                <p className='font-bold pb-2 text-center'>LITTLE BIG BOY</p>
                <p>Precio:</p>
                <p>cantidad:2</p>
                <p>Total:$60</p>
            </div>
        </>
    )
}

export default PInfoCard