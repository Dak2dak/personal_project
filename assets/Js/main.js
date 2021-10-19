

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
