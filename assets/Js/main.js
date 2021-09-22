        
        
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
