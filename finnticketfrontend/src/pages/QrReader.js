import React from 'react'
import ROAR from '../assets/img/ROAR.png'
import ShortCutNavBar from '../components/ShortCutNavBar'
function QrReader() {
  return (
    <>
    <div class="lg:hidden">
                <div class="flex justify-center items-center min-h-screen">
                    <div class="h-auto w-80 bg-card-grey border-2 border-gold p-3 rounded-lg">
                        <p class="text-xl font-semibold">LECTOR QR</p>
                        <div className='bg-black border-2 py-32 my-8'></div>
                        <div class="flex justify-center mt-4"> <button class="outline-none pay h-12 bg-gold text-white mb-3 hover:bg-goldhov rounded-lg w-1/2 cursor-pointer transition-all">Escanear</button> </div>
                    </div>
                </div>
            </div>

            <div class="hidden lg:block">
                <ShortCutNavBar />
                <div className='flex justify-center items-center'>
                    <div className='w-full text-center py-40'>
                        <h1 className='font-bold text-6xl justify-center'>CARACTERISTICA NO DISPONIBLE PARA ORDENADORES</h1>
                        <button className='bg-gold border-2 rounded px-10 py-2 m-10 font-bold text-xl hover:bg-goldhov'>Volver</button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default QrReader