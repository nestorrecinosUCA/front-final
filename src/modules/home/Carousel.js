import React, { useState, useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';

function Carousel() {

    const slides = [
        {
            url: 'https://www.eclipseeventos.com/wp-content/uploads/2018/10/INICIO2.jpg',
            
        },
        {
            url: 'https://img.freepik.com/psd-gratis/plantilla-banner-concierto-musica_23-2148986201.jpg',
        },
        {
            url: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-cheering-crowd-background-banner-image_186456.jpg',
        },
        {
           
            url: ' https://laesquina506.com/wp-content/uploads/2023/02/tienda-online-costa-rica.png'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const isLastSlide = prevIndex === slides.length - 1;
                return isLastSlide ? 0 : prevIndex + 1;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]); // Incluir slides.length en el arreglo de dependencias

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <>
            <div className="flex items-center z-10">
                <div className='w-full h-96 lg:w-3/4 lg:h-96 lg:py-16 m-auto py-20 px-4 relative group'>
                    <div
                        style={{
                            backgroundImage: `url(${slides[currentIndex].url})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                    ></div>
                    <div className='flex top-4 justify-center py-2'>
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-red-500' : ''}`}
                            >
                                <RxDotFilled />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carousel;
