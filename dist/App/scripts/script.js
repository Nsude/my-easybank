// ################## Varianles Used ##################
const menu = document.querySelector('#hamburger');
const heroSection = document.querySelector('.hero');
const body = document.querySelector('body');
const menuLinks = document.querySelector('.menu-links');
const features = document.querySelector('.features');
const articlesCon = document.querySelector('.articles__container');
const footer = document.querySelector('footer');
const footer_L = document.querySelector('.footer-L');

// for the dropdown functionality
menu.addEventListener('click', showmenu);


// code for rendering the dropdown menu
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

// adds flex direction col
function addFlexDisplayCol(elem) {
  elem.classList.add('flex-fd-cl');
}

// removes flex direction col
function removeFlexDisplayCol(elem) {
  elem.classList.remove('flex-fd-cl');
}

// removes all helper classes
function removeHelpers(elem) {
  elem.classList.remove('flex');
  elem.classList.remove('flex-fd-cl');
  elem.classList.remove('flex-jc-sb');
}

// adds helper classes
function addHelpers(elem) {
  elem.classList.add('flex');
  elem.classList.add('flex-fd-cl');
  elem.classList.add('flex-jc-sb');
}

// prevent adding classes repeatedly
let exists_D = false;
let exists_T = false;

// for the tablet view media queries
function checkFlex() {
  if (window.innerWidth >= 1124) {
    removeFlexDisplayCol(features);
    removeFlexDisplayCol(articlesCon);
    removeFlexDisplayCol(footer);


    footer_L.classList.add('flex');

    // add all helper classes to articles con
    // prevent adding classes repeatedly
    if (exists_D == false) {
      addHelpers(articlesCon);
      
      // add all helper classes from features
      addHelpers(features);

      exists_D = true;
    }

    
    
    exists_T = false;

  } else if (window.innerWidth <= 1123) {
    addFlexDisplayCol(footer);
    
    footer_L.classList.remove('flex');


    if(exists_T == false) {
      // remove all helper classes from articles con
      removeHelpers(articlesCon);

      // remove all helper classes from features
      removeHelpers(features); 

      exists_T = true;      
    }
    

    

    exists_D = false;
  } 
}

// calls checkflex forever
setInterval(checkFlex, 1);

// all article elements
const articles = document.querySelectorAll('.article');

function desktopMakeResp() {

  if (window.innerWidth > 1240) {

    articles.forEach(article => {
      article.style = `flex-basis: 23.3%;`
    })

  } else if(window.innerWidth > 699 && window.innerWidth < 1123) {
    articles.forEach(article => {
      article.style = `flex-basis: `;
    })

  } else {
    articles.forEach(article => {
      article.style = `flex-basis: 30%`
    })
  }
}


// calls desktopMakeResp forever
setInterval(desktopMakeResp, 1);


