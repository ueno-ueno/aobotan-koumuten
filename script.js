"use strict"

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.header__hamburger');
  const sidebar = document.getElementById('sidebar');

  hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('navOpen');
    
  })




const newsItems = document.querySelectorAll('.news__item');

newsItems.forEach(item => {
  const modal = item.querySelector('.news__modalList');
  const closeButton = modal.querySelector('.c-closeButton');
  console.log(closeButton)

  item.addEventListener('click', () => {
    modal.classList.add('modalOpen');
  });

  closeButton.addEventListener('click', (event) => {
    event.stopPropagation(); // イベントの伝播を停止
    modal.classList.remove('modalOpen');
  });
});


new Splide( '.splide',{
  type: 'loop',
  perPage: 3,
  perMove: 1,
  gap: '2%',
  padding: '4%',
  arrows: false,
  
  autoScroll: {
    speed: .5,
    pauseOnHover: false,
  },

  breakpoints:{
    720:{
      perPage: 1,
      gap: '1%',
    }
  }
} ).mount( window.splide.Extensions );




});