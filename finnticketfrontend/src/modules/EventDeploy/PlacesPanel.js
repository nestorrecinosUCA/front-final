import React from 'react'
import PlaceComponent from './PlaceComponent'

function Places() {
  return (
    <>
      <div className='bg-card-grey my-10 mx-20 rounded-lg p-10' >
        <div className=' bg-header-bg py-5 px-5 rounded-lg items-center text-center'>
          <h2 class=' text-2xl'>LOCALIDADES</h2>
        </div>
        <div class="grid gap-4 gap-y-1 grid-cols-2 grid-rows-2">
          <PlaceComponent />
          <PlaceComponent />
          <PlaceComponent />
          <PlaceComponent />
        </div>
      </div>
    </>
  )
}

export default Places