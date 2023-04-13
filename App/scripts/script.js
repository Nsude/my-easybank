const menu = document.querySelector('#hamburger');
const heroSection = document.querySelector('.hero');
const body = document.querySelector('body');
const menuLinks = document.querySelector('.menu-links');
const features = document.querySelector('.features');
const articlesCon = document.querySelector('.articles__container');
const footer = document.querySelector('footer');
const footer_L = document.querySelector('.footer-L');

menu.addEventListener('click', showmenu);

function showmenu() {
  // toggle turn-x class
  menu.classList.toggle('turn-x')

  // displays and hides gradient
  heroSection.classList.toggle('show-before')

  // displays and hides the menu
  menuLinks.classList.toggle('show-menu')

  // sets no scroll on body
  body.classList.toggle('noscroll')
}

function addFlex(elem) {
  elem.classList.add('flex-fd-cl');
}

function removeFlex(elem) {
  elem.classList.remove('flex-fd-cl');
}

function checkFlex() {
  if (window.innerWidth >= 1124) {
    removeFlex(features);
    removeFlex(articlesCon);
    removeFlex(footer);

    footer_L.classList.add('flex');


  } else if (window.innerWidth > 1123) {
    addFlex(articlesCon);

  } else {
    addFlex(features);
    addFlex(footer);
    
    footer_L.classList.remove('flex');

  }
}

setInterval(checkFlex, 1)




