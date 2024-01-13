document.addEventListener("DOMContentLoaded", function() {
    'use strict';

    // Smooth scroll
    const alllinks = document.querySelectorAll("a:link");

alllinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Scroll back to top
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        // Scroll to other links
        if(href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: "smooth"});
        }

                
    });
});

    // Hide navbar on mobile after click
    const navbarLinks = document.querySelectorAll('.navbar-nav a');
    navbarLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            document.querySelector('.navbar-collapse').classList.remove('show');
        });
    });

    // Navbar on scroll
    window.addEventListener("scroll", function() {
        const onScroll = window.scrollY;

        if (onScroll > 50) {
            document.querySelector(".navbar").classList.add("navbar-fixed");
            
        } else {
            document.querySelector(".navbar").classList.remove("navbar-fixed");
            
        }
    });

    // Portfolio filterizr
    const filterContainer = document.querySelector('.filter-container');
    imagesLoaded(filterContainer, function() {
        const filterizr = new Filterizr(filterContainer);
    });

    // Portfolio filter
    const portfolioFilter = document.querySelectorAll('.portfolio-filter-menu li');
    portfolioFilter.forEach(function(filter) {
        filter.addEventListener('click', function() {
            portfolioFilter.forEach(function(item) {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });


});

