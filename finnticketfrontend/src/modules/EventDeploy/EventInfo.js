import React from 'react'
import MGEF from '../../assets/img/MGEF.jpg'
import Information from './Information'
function EventInfo() {
    return (
        <div class="card w-full bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={MGEF} alt="Artist" class="rounded-xl h-96 w-96" />
            </figure>
            <div class="card-body items-center text-center">
                <Information/>
                <div class="card-actions">
                </div>
            </div>
        </div>
    )
}

export default EventInfo