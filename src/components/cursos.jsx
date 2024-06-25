import React from 'react'

export const Cursos = () => {
    const handleClick = () => {
        const navCursos = document.querySelectorAll(".cursos-nav-iten")

    }
    return (
        <>
            <section className='container-fluid cursos'>
                <div className='cursos-container'>
                    <div className='cursos-title-section'>
                        <p className='title-section-text'>Cursos</p>
                        <p className='subtitle-section-text'>Cursos de Curta Duração</p>
                    </div>
                    <div className='cursos-nav'>
                        <ul className='cursos-nav-list'>
                            <li onClick={handleClick} className='cursos-nav-iten'>
                                <div className='border-bar-cursos'></div>
                                <p className='cursos-nav-title'>TECNOLOGIA</p>
                            </li>
                            <li onClick={handleClick} className='cursos-nav-iten'>
                                <div className='border-bar-cursos'></div>
                                <p className='cursos-nav-title'>INOVAÇÃO</p>
                            </li>
                            <li onClick={handleClick} className='cursos-nav-iten'>
                                <div className='border-bar-cursos'></div>
                                <p className='cursos-nav-title'>NEGÓCIOS</p>
                            </li>
                        </ul>
                    </div>
                    <div className='cursos-iten tecnologia'>
                        <p className='cursos-iten-title'>Tecnologia</p>
                        <p className='cursos-iten-text'>Big Data Ecosystem <span>REMOTO • LIVE</span></p>
                        <p className='cursos-iten-text'>Creating Dashboards for BI <span>REMOTO • LIVE</span></p>
                        <p className='cursos-iten-text'>Big Data Science - Machine Learning & Data Mining <span>REMOTO • LIVE + MULTIMÍDIA</span></p>
                        <p className='cursos-iten-text'>Storytelling <span>REMOTO • LIVE</span></p>
                    </div>
                </div>
            </section>
        </>
    )
}