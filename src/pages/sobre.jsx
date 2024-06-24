import React from 'react';

import { Menu } from '../components/menu';

import Intro from '../assets/imgs/intro.png'

export const Sobre = () => {
   const curtain = document.querySelector(".container-curtain")
   window.addEventListener('scroll', () => {
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
                  <div className='container-curtain test'></div>
               </div>
               <div className='intro-text-two '>
                  <div className='scroll-left__inner'>
                     <p className='text__left'>
                        • SKILL • CONHCIMENTO
                     </p>
                     <p className='text__left'>
                        • SKILL • CONHCIMENTO
                     </p>
                  </div>
                  <div className='scroll-right__inner'>
                     <p className='text__right'>MUITO. MUITO ALÉM DOS TUTORIAIS</p>
                     <p className='text__right'>MUITO. MUITO ALÉM DOS TUTORIAIS</p>
                  </div>

               </div>
            </div>
         </section>
         <section className='container-fluid'>

         </section>
      </>
   )
}