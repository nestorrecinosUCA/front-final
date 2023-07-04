import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function HomeCard() {
    return (
        <>
            <div class="flex items-center justify-center mb-6 z-10 p-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10">

                    <div class="card shadow-lg rounded-lg overflow-hidden bg-base-100 hover:bg-base-200 transition duration-300 ease-in-out">
                        <Link to="/signin">
                        <img class="w-72 h-48 object-cover transform hover:scale-95 hover:opacity-75 transition duration-500 ease-in-out rounded-t-lg" src="https://imagenes.muyinteresante.es/files/composte_image/uploads/2023/06/09/64833f2caa301.jpeg" alt="spiterman" />
                        <div class="p-4">
                            <h2 class="text-sm mb-2">EVENTO</h2>
                        </div>
                        </Link>
                    </div>


                    <div class="card shadow-lg rounded-lg overflow-hidden bg-base-100 hover:bg-base-200 transition duration-300 ease-in-out">
                        <img class="w-72 h-48 object-cover transform hover:scale-95 hover:opacity-75 transition duration-500 ease-in-out rounded-t-lg" src="https://eventoempresa.com/wp-content/uploads/2016/01/cateringcacerespajuelo2.jpg" alt="spiterman" />
                        <div class="p-4">
                            <h2 class="text-sm mb-2">EVENTO</h2>
                        </div>
                    </div>


                    <div class="card shadow-lg rounded-lg overflow-hidden bg-base-100 hover:bg-base-200 transition duration-300 ease-in-out">
                        <img class="w-72 h-48 object-cover transform hover:scale-95 hover:opacity-75 transition duration-500 ease-in-out rounded-t-lg" src="https://thumbs.dreamstime.com/b/carteles-de-cine-y-producci%C3%B3n-pel%C3%ADculas-proyecci%C3%B3n-estudio-v%C3%ADdeo-vintage-banners-con-c%C3%A1mara-en-el-carrete-pel%C3%ADcula-tr%C3%ADpode-234121603.jpg" alt="spiterman" />
                        <div class="p-4">
                            <h2 class="text-sm mb-2">EVENTO</h2>
                        </div>
                    </div>


                    <div class="card shadow-lg rounded-lg overflow-hidden bg-base-100 hover:bg-base-200 transition duration-300 ease-in-out">
                        <img class="w-72 h-48 object-cover transform hover:scale-95 hover:opacity-75 transition duration-500 ease-in-out rounded-t-lg" src="https://puregaming.es/wp-content/uploads/2017/08/Destacada-los-eventos-molan.jpg" alt="spiterman" />
                        <div class="p-4">
                            <h2 class="text-sm mb-2">EVENTO</h2>
                        </div>
                    </div>

                    <div class="card shadow-lg rounded-lg overflow-hidden bg-base-100 hover:bg-base-200 transition duration-300 ease-in-out">
                        <img class="w-72 h-48 object-cover transform hover:scale-95 hover:opacity-75 transition duration-500 ease-in-out rounded-t-lg" src="https://qph.cf2.quoracdn.net/main-qimg-ba392a428216bdeaf2127f24bef0d05f-lq" alt="spiterman" />
                        <div class="p-4">
                            <h2 class="text-sm mb-2">EVENTO PELICULA - 12/06/2023</h2>
                        </div>
                    </div>

                    <div class="card shadow-lg rounded-lg overflow-hidden bg-base-100 hover:bg-base-200 transition duration-300 ease-in-out">
                        <img class="w-72 h-48 object-cover transform hover:scale-95 hover:opacity-75 transition duration-500 ease-in-out rounded-t-lg" src="https://depor.com/resizer/4Slos57_um0fBuRNKgnV6RwDTTo=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/2CKZIZ5AD5GHJMDWZFAZ2N3U4E.jpg" alt="spiterman" />
                        <div class="p-4">
                            <h2 class="text-sm mb-2">EVENTO PELICULA - 12/06/2023</h2>
                        </div>
                    </div>

                    <div class="card shadow-lg rounded-lg overflow-hidden bg-base-100 hover:bg-base-200 transition duration-300 ease-in-out">
                        <img class="w-72 h-48 object-cover transform hover:scale-95 hover:opacity-75 transition duration-500 ease-in-out rounded-t-lg" src="https://rare-gallery.com/mocahbig/1324375-Tengen-UzuiTengen-Uzui.png" alt="spiterman" />
                        <div class="p-4">
                            <h2 class="text-sm mb-2">EVENTO PELICULA - 12/06/2023</h2>
                        </div>
                    </div>

                    <div class="card shadow-lg rounded-lg overflow-hidden bg-base-100 hover:bg-base-200 transition duration-300 ease-in-out">
                        <img class="w-72 h-48 object-cover transform hover:scale-95 hover:opacity-75 transition duration-500 ease-in-out rounded-t-lg" src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/05/Kimetsu-no-Yaiba-Rengoku-celebra-el-dia-de-las-madres-con-esta-triste-despedida-en-fanart.jpg" alt="spiterman" />
                        <div class="p-4">
                            <h2 class="text-sm mb-2">EVENTO PELICULA - 12/06/2023</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default HomeCard