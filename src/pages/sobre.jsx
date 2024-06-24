import React from 'react';

import { Menu } from '../components/menu';

import Intro from '../assets/imgs/intro.png'

export const Sobre = () => {

   window.addEventListener('scroll', () => {
      let position = window.scrollY - 500;
      const line1left = document.querySelector(".line-1-text__left")
      const line2left = document.querySelector(".line-2-text__left")
      const line1right = document.querySelector(".line-1-text__right")
      const line2right = document.querySelector(".line-2-text__right")
      line1left.style.left = `${position}px`
      line2left.style.left = `${position - 1655 - 24}px`
      line1right.style.left = `${-position + 1000}px`
      line2right.style.left = `${-position - 2481 + 1000}px`

      if (window.scrollY > 716) {
         document.querySelector(".container-curtain").classList.add("curtain__animation")
      }


   })

   return (
      <>
         <Menu />
         <main className='container-fluid main' id='main'>
            <div className='main-container'>
               <div className='main-box'>
                  <h1>...A Melhor Faculdade<br />de Tecnologia</h1>
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
                     <p className='line-1-text__right  text'>MUITO. MUITO ALÉM DOS TUTORIAIS</p>
                     <p className='line-2-text__right  text'>MUITO. MUITO ALÉM DOS TUTORIAIS</p>
                  </div>

               </div>
            </div>
         </section>
         <section className='container-fluid'>
            <div className='water-container'>

            </div>
         </section>
      </>
   )
}