import React, { useEffect } from 'react'

export const Main = () => {

    useEffect(() => {
        const handlePageLoad = (event) => {
            event.preventDefault();
            event.returnValue = '';
            const title = document.querySelector(".main-title")
            const subTitle = document.querySelector(".main-subtitle")

            title.setAttribute("active", true)
            subTitle.setAttribute("active", true)

            // Coloque aqui a lógica que você quer executar ao carregar a página
        };

        // Adiciona o evento de listener para a página carregar
        window.addEventListener('beforeunload', handlePageLoad);


        // Remove o event listener quando o componente é desmontado
        return () => {
            window.removeEventListener('beforeunload', handlePageLoad);
        };
    }, []);

    window.addEventListener('load', () => {
        const title = document.querySelector(".main-title")
        const subTitle = document.querySelector(".main-subtitle")

        title.setAttribute("active", true)
        subTitle.setAttribute("active", true)
    })
    return (
        <>
            <main className='container-fluid main' id='main'>
                <div className='main-container'>
                    <div className='main-box'>
                        <h1 className='main-title' active="false">‎ ‎ ‎ A Melhor Faculdade<br /><span>de Tecnologia</span></h1>
                        <h2 className='main-subtitle' active="false">SOBRE</h2>
                    </div>
                </div>
            </main>
        </>
    )
}