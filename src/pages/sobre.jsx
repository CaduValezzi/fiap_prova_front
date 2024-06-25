import React, { useState, useEffect } from 'react';

import { Menu } from '../components/menu';
import { Water } from '../components/water';

import Intro from '../assets/imgs/intro.png'



export const Sobre = () => {
   const [imageSrc, setImageSrc] = useState('initial-image-url.jpg');
   useEffect(() => {
      // Função que será chamada no evento de scroll
      const handleScroll = () => {
         let scrollPosition = window.scrollY - 1616;

         if (scrollPosition < 0) {
            scrollPosition = 0
         } else if (scrollPosition > 1146) {
            scrollPosition = 1146
         }


         // Lógica para mudar o endereço da imagem com base na posição do scroll
         if (scrollPosition / 6 < 10) {
            setImageSrc(`imgs/water/water_00${Math.round(scrollPosition / 6)}.jpg`);
         } else if (scrollPosition / 6 < 100) {
            setImageSrc(`imgs/water/water_0${Math.round(scrollPosition / 6)}.jpg`);
         } else if (scrollPosition / 6 >= 100) {
            setImageSrc(`imgs/water/water_${Math.round(scrollPosition / 6)}.jpg`);
         }
      };

      // Adiciona o event listener
      window.addEventListener('scroll', handleScroll);

      // Remove o event listener quando o componente é desmontado
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   window.addEventListener('scroll', () => {
      let position = window.scrollY - 500;
      let contador = window.scrollY - 1616;


      const line1left = document.querySelector(".line-1-text__left")
      const line2left = document.querySelector(".line-2-text__left")
      const line1right = document.querySelector(".line-1-text__right")
      const line2right = document.querySelector(".line-2-text__right")
      const water = document.querySelector(".water-container")
      const pageHeight = document.querySelector("body").clientHeight

      line1left.style.left = `${position}px`
      line2left.style.left = `${position - 1655 - 24}px`
      line1right.style.left = `${-position + 1000}px`
      line2right.style.left = `${-position - 2481 + 1000}px`



      if (window.scrollY > 716) {
         document.querySelector(".container-curtain").classList.add("curtain__animation")
      }


   })

   const handleClick = () =>{
      const navCursos = document.querySelectorAll(".cursos-nav-iten")
      
   }

   

   return (
      <>
         <Menu />
         <main className='container-fluid main' id='main'>
            <div className='main-container'>
               <div className='main-box'>
                  <h1>‎ ‎ ‎ A Melhor Faculdade<br />de Tecnologia</h1>
                  <h2>SOBRE</h2>
               </div>
            </div>
         </main>

         <section className='container-fluid intro'>
            <div className='intro-container'>
               <div className='intro-text-one '>
                  <div className='class-txt scroll-auto '>
                     <div className='scroll-auto-left__inner'>
                        <p> CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.</p>
                        <p> CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.</p>
                     </div>
                  </div>
                  <div className='tecno-txt scroll-auto'>
                     <div className='scroll-auto-right__inner'>
                        <p>TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.</p>
                        <p>TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.</p>
                     </div>
                  </div>
               </div>
               <div className='intro-figure'>
                  <img className='intro-img' src={Intro} alt="" />
                  <div className='container-curtain curtain'></div>
               </div>
               <div className='intro-text-two '>
                  <div className='scroll-left__inner'>
                     <p className='line-1-text__left text'> • SKILL • CONHCIMENTO </p>
                     <p className='line-2-text__left text'> • SKILL • CONHCIMENTO</p>
                  </div>
                  <div className='scroll-right__inner'>
                     <p className='line-1-text__right text tuto-txt'>MUITO. MUITO ALÉM DOS TUTORIAIS</p>
                     <p className='line-2-text__right text tuto-txt'>MUITO. MUITO ALÉM DOS TUTORIAIS</p>
                  </div>
               </div>
            </div>
         </section>

         <section className='container-fluid water'>
            <div className='water-container'>
               <img src={imageSrc} alt="agua" />
            </div>
         </section>

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