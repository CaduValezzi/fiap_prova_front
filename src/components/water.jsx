import React, { useState, useEffect } from 'react';
export const Water = () => {
    const [imageSrc, setImageSrc] = useState('initial-image-url.jpg');

    useEffect(() => {
        // Função que será chamada no evento de scroll
        const handleScroll = () => {
            let scrollPosition = window.scrollY - 1616;

            if (scrollPosition < 0) {
                scrollPosition = 0
            } else if (scrollPosition > 191) {
                scrollPosition = 191
            }


            // Lógica para mudar o endereço da imagem com base na posição do scroll
            if (scrollPosition < 10) {
                setImageSrc(`imgs/water/water_${scrollPosition}.jpg`);
            } else if (scrollPosition < 100) {
                setImageSrc(`imgs/water/water_0${scrollPosition}.jpg`);
            } else {
                setImageSrc(`imgs/water/water_${scrollPosition}.jpg`);
            }
        };

        // Adiciona o event listener
        window.addEventListener('scroll', handleScroll);

        // Remove o event listener quando o componente é desmontado
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <section className='container-fluid water'>
                <div className='water-container'>
                    <img src={imageSrc} alt="" />
                </div>
            </section>
        </>
    )
}