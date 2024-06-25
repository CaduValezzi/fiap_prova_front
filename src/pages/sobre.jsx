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
         if (scrollPosition/6 < 10) {
            setImageSrc(`imgs/water/water_00${Math.round(scrollPosition/6)}.jpg`);
         } else if (scrollPosition/6  < 100) {
            setImageSrc(`imgs/water/water_0${Math.round(scrollPosition/6)}.jpg`);
         } else if(scrollPosition/6  >= 100) {
            setImageSrc(`imgs/water/water_${Math.round(scrollPosition/6)}.jpg`);
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
                     <p className='line-1-text__right text tuto-txt'>MUITO. MUITO ALÉM DOS TUTORIAIS</p>
                     <p className='line-2-text__right text tuto-txt'>MUITO. MUITO ALÉM DOS TUTORIAIS</p>
                  </div>

               </div>
            </div>
         </section>
         <section className='container-fluid water'>
            <div className='water-container'>
               <img src={imageSrc} alt="" />
            </div>
         </section>
         
      </>
   )
}