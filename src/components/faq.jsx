import React from 'react'

export const Faq = () => {
    return (
        <>
            <section className='container-fluid faq'>
                <div className='faq-container'>
                    <div className='faq-title-section'>
                        <div className='border-bar'></div>
                        <p className='title-section-text'>FAQ</p>
                        <p className='subtitle-section-text'>Dúvidas Frequentes</p>
                    </div>
                    <div className='faq-sections'>
                        <div className='faq-sections-updown'>
                            <div className="faq-sections-div">
                                <div className='border-bar'></div>
                                <p className='div-question'>QUANDO POSSO ME MATRICULAR?</p>
                                <p className='div-answer'>Você pode se matricular em qualquer dia e hora, basta acessar a página do curso e se inscrever.</p>
                            </div>
                            <div className="faq-sections-div">
                                <div className='border-bar'></div>
                                <p className='div-question'>POSSO FAZER DOIS OU MAIS CURSOS AO MESMO TEMPO?</p>
                                <p className='div-answer'>Sim. Apenas atente-se às datas, elas devem ser diferentes, porque cada curso tem sua dinâmica.</p>
                            </div>
                            <div className="faq-sections-div">
                                <div className='border-bar'></div>
                                <p className='div-question'>QUAIS OS PRÉ-REQUISITOS?</p>
                                <p className='div-answer'>Cada curso tem seus pré-requisitos descritos na própria página. Identifique-os, para que você obtenha um melhor aproveitamento do seu SHIFT.</p>
                            </div>
                        </div>
                        <div className='faq-sections-updown'>
                            <div className="faq-sections-div">
                                <div className='border-bar'></div>
                                <p className='div-question'>QUAL A DURAÇÃO DOS CURSOS?</p>
                                <p className='div-answer'>De 6 a 42 horas.</p>
                            </div>
                            <div className="faq-sections-div">
                                <div className='border-bar'></div>
                                <p className='div-question'>PRECISO LEVAR ALGUM MATERIAL PARA AS AULAS?</p>
                                <p className='div-answer'>Não. Os materiais utilizados em sala de aula são fornecidos pela FIAP e as aulas mais técnicas são realizadas em nossos próprios laboratórios. Sugerimos somente que traga o que preferir para suas anotações.</p>
                            </div>
                            <div className="faq-sections-div">
                                <div className='border-bar'></div>
                                <p className='div-question'>VOU RECEBER CERTIFICADO DE CONCLUSÃO DE CURSO?</p>
                                <p className='div-answer'>Sim. Ao cumprir pelo menos 75% da carga horária do curso, você receberá um Certificado Digital, que poderá ser acessado na plataforma.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}