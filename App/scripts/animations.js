// Value Prop section animations
const features = document.querySelector('.features');

// observer options for value prop
const options = {
  root : null, // default
  threshold : 0.18,
  rootMarging : "0px"
}

const featuresObserver = new IntersectionObserver(animate, options);

function animate(entries, featuresObserver) {
  
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      entry.target.classList.remove('fade-in');
    } else {
      entry.target.classList.add('fade-in');
    }
  })

}

featuresObserver.observe(features);


// ############### Not Used ###############

// hero-section Animations
// const hero_image = document.querySelector('.hero__image');
// const hero_text = document.querySelector('.hero__text');


// const hero_observerSL = new IntersectionObserver(animateHero);

// function animateHero(entries, hero_observerSL) {

//   entries.forEach(entry => {
//     let e = entry.target;

//     if(!entry.isIntersecting) {
//       return;
//     } else {
//       e.classList.add('reveal-down');

//       hero_text.classList.add('reveal-up');

//       hero_observerSL.unobserve(e);
//     }
//   })
  
// }

// hero_observerSL.observe(hero_image);

// #########################################


const articles = document.querySelectorAll('.article');

const art_ops = {
  threshold: 0.7,
  rootMargin: "0px 0px 300px 0px"
};

const articles_ob = new IntersectionObserver(animateArticles, art_ops);


function animateArticles(entries, articles_ob) {

  if (window.innerWidth > 1123) {
    return;
  } 

  entries.forEach(entry => {
    let e = entry.target;

    if(entry.isIntersecting) {
      e.classList.add('fade-in');

    } else {
      e.classList.remove('fade-in');
    }
  })

}

articles.forEach(article => {
  articles_ob.observe(article);
})
