import React from 'react'

function Information() {
    return (
        <>
            <div className=' rounded px-10 border-4 border-white-box w-full items-center text-center py-5'>
                <h2 class="card-title justify-center">Martin Garrix</h2>
                <div className='flex fle-row h-full'>
                    <div className='w-40'>
                        <p className='text-left'>Lugar y fecha:</p>
                        <p className='text-left'>Hora:</p>
                        <p className='text-left'>Duración:</p>
                        <p className='text-left'>Patrocinador:</p>
                        <p className='text-left'>Categoría:</p>
                    </div>
                    <div className='basis-4'>
                        <p className='text-left'>Estadio cuscatlán - 12/05/2023</p>
                        <p className='text-left'>8:30 pm</p>
                        <p className='text-left'>8:30pm - 1:00am</p>
                        <p className='text-left'>La tecleña</p>
                        <p className='text-left'>Musical</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Information