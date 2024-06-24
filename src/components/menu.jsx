import React from 'react'
import styled, { css } from 'styled-components';
// images
import FiapLogo from "../assets/svgs/logo-fiap.svg"

export const Menu = () => {
    window.addEventListener('scroll', () => {

        


        if (window.scrollY > 1) {
            document.querySelector(".menu").classList.add("menu-animation")
        }
        else {
            document.querySelector(".menu").classList.remove("menu-animation")
        }

    })


    return (
        <>
            <header className='container-fluid menu'>
                <nav className='container'>
                    <img className='logoimg' src={FiapLogo} alt="FIAP" />
                </nav>
                <div className='page-bar'></div>
            </header>
        </>
    )
}