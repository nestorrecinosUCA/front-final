import React, { useState, useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';

function Carousel() {

    const slides = [
        {
            url: 'https://i.pinimg.com/originals/24/b3/2e/24b32e53341202e5f52bf1609468fd05.jpg',
        },
        {
            url: 'https://i.pinimg.com/originals/05/0f/0a/050f0a3bd19ce811522f0c63256637e9.jpg',
        },
        {
            url: 'https://t4.ftcdn.net/jpg/04/46/93/93/360_F_446939375_83iP0UYTg5F9vHl6icZwgrEBHXeXMVaU.jpg',
        },
        {
            url: 'https://img.freepik.com/vector-premium/paisaje-urbano-verano-larga-noche-horizontal-panorama-ciudad-ilustracion-plana_318844-225.jpg?w=2000'
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

