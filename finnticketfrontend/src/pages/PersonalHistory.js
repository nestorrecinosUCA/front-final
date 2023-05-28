import React from 'react'
import ShortCutNavBar from '../components/ShortCutNavBar'
import HistoryTickerCard from '../modules/PersonalHistory/HistoryTickerCard'

function PersonalHistory() {
    return (
        <>
            <ShortCutNavBar />
            <div className='mx-4 lg:mx-20 text-3xl mt-10'>
                <a>Historial de eventos asistidos</a>
            </div>
            <div className='mx-4 border-b-2 lg:mx-20 lg:border-b-4 md:border-b-4 2xl:border-b-4 rounded mb-8'/>
            <div className='mx-4 lg:mx-20'>
                <HistoryTickerCard />
                <HistoryTickerCard/>
            </div>
        </>
    )
}

export default PersonalHistory