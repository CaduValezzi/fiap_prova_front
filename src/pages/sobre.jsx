import React from 'react';
//components
import { Menu } from '../components/menu';
import { Main } from '../components/main';
import { Intro } from '../components/intro';
import { Water } from '../components/water';
import { Cursos } from '../components/cursos';
import { Faq } from '../components/faq';

export const Sobre = () => {
   return (
      <>
         <Menu />
         <Main />
         <Intro />
         <Water />
         <Cursos />
         <Faq />
      </>
   )
}