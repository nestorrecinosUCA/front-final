import React from 'react'
import EventInfo from '../modules/EventDeploy/EventInfo'
import Places from '../modules/EventDeploy/Places'

function ShowInfo() {
  return (
    <>
        <div className='flex fle-row h-full'>
            <div className='basis-4'><EventInfo/> </div>
            <div className='basis-4'><Places/></div>

        </div>
    </>
  )
}

export default ShowInfo