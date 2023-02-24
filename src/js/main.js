"use strict"

const burgerBtn = document.querySelector('.main-header__burger-btn');
const list = document.querySelector(".main-header__menu");

burgerBtn.addEventListener('click', (event)=>{
    burgerBtn.classList.toggle('main-header__burger-btn--active');
    list.classList.toggle('main-header__menu--active');
});