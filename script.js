"use strict"

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.header__hamburger');
  const sidebar = document.getElementById('sidebar');
  const headerNavLinks = document.querySelectorAll('.header__navTitle');

  // ハンバーガーメニューの開閉
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('navOpen');
  });

  // サイドバー内クリックで閉じる
  sidebar.addEventListener('click', () => {
    hamburger.classList.remove('active');
    sidebar.classList.remove('navOpen');
  });

  // メニュー外クリックで閉じる
  document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
      hamburger.classList.remove('active');
      sidebar.classList.remove('navOpen');
    }
  });

  // リンククリック時にメニューを閉じる
  headerNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      sidebar.classList.remove('navOpen');
    });
  });

  // アコーディオンメニューの開閉
  const navTitles = document.querySelectorAll('.header__navTitleOpen');
  
  navTitles.forEach(navTitle => {
    const titleTop = navTitle.querySelector('.header__navTitle--top');
    titleTop.addEventListener('click', function(e) {
      e.preventDefault();
      navTitle.classList.toggle('is-open');
    });
  });

  // ニュースモーダル
  const newsItems = document.querySelectorAll('.news__item');

  newsItems.forEach(item => {
    const modal = item.querySelector('.news__modalList');
    const closeButton = modal.querySelector('.c-closeButton');
    
    item.addEventListener('click', () => {
      modal.classList.add('modalOpen');
    });

    closeButton.addEventListener('click', (event) => {
      event.stopPropagation();
      modal.classList.remove('modalOpen');
    });
  });

  // スライダー
  new Splide('.splide', {
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
  }).mount(window.splide.Extensions);
});