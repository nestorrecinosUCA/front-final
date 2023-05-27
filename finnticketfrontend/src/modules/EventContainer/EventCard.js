import React from 'react'
import MGEF from '../../assets/img/MGEF.jpg'
import Information from '../EventDeploy/Information'

function EventCard() {
  return (
    <div className=' bg-card-white-grey rounded mt-2 flex flex-row p-6'>
        <div className=' w-96'>
        <img src={MGEF} alt="Artist" class="rounded-xl lg:h-auto lg:w-auto sm:h-full sm-w-full" />
        </div>
        <div className='bg-white'></div>
    </div>
  )
}

export default EventCard