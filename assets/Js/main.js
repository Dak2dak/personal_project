
// ==========home button JavaScript code
// let homeButton = document.getElementByClassName('flex__button');
// homeButton.onclick = function homeFunction(){

// }

// ==========Scroll down JavaScript code



// ==========About button JavaScript code
// let aboutButton = document.getElementsByClassName('about__button');
// aboutButton.onclick = function aboutFunction(){

// }

// ==========Skills content JavaScript code
// const unrollElement = document.getElementById('upside__down');
// let skillSection = document.getElementById('skills__section');
// unrollElement.addEventListener('click', {
//     handleEvent: function (event) {
//         if(skillSection.style.display=="block"){
//             skillSection.style.display="none";
//         }else{
//             skillSection.style.display="block";
//         }
//     };



// ==========Qualification JavaScript code====================

let eduTimeline = document.getElementById('edu__timeline');
let workTimeline = document.getElementById('work__timeline');
let eduLink = document.querySelector('.education');
let workLink = document.querySelector('.work');

workLink.addEventListener('click', switching);

function switching(e){
    e.preventDefault();

       workTimeline.classList.remove('hide');
       eduTimeline.classList.add('hide');
};


eduLink.addEventListener('click', myEducation);

function myEducation(e){
    e.preventDefault();

    eduTimeline.classList.remove('hide');
    workTimeline.classList.add('hide');
};

// ==========Services JavaScript code=========================



// ==========Portfolio swiper JavaScript code=================
 let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// ==========Portfolio button JavaScript code

// ==========Project__sec button JavaScript code



// ==========Testimonial swiper JavaScript code=================
let swiperTestimonial = new Swiper('.testimonial__container', {

    grabCursor: true,
    spaceBetween: 50,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        570:{
            slidesPreView: 2,
        }
    } 
});

// ==========Contactme button JavaScript code
// let contactmeButton = document.getElementByClassName('message__btn');
// contactmeButton.onclick = function contactmeFunction(){
    
// }

// ===========Dark mode JavaScript code
function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }
