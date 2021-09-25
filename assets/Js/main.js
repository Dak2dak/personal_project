        
        
        $(document).ready(function(){
            $(".owl-carousel").owlCarousel({
                margin: 10,
                loop: true,
                nav: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    769: {
                        items: 2,
                    },
                }
            });
        });


        let swiper = new Swiper('.swiper-container', {
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
