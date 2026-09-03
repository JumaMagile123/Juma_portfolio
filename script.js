```javascript
/* =====================================================
   JUMA MAGILE PORTFOLIO
   JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("show");

}


/* =====================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
===================================================== */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const menu =
            document.querySelector(".nav-links");

        menu.classList.remove("show");

    });

});


/* =====================================================
   SLIDESHOW INDICATORS
===================================================== */

const dots =
    document.querySelectorAll(".dot");


let currentSlide = 0;


function updateDots() {

    dots.forEach(function(dot) {

        dot.classList.remove("active");

    });


    if (dots.length > 0) {

        dots[currentSlide].classList.add("active");

    }

}


/* Change indicator every 5 seconds */

if (dots.length > 0) {

    setInterval(function() {

        currentSlide++;

        if (currentSlide >= dots.length) {

            currentSlide = 0;

        }

        updateDots();

    }, 5000);

}


/* =====================================================
   CONTACT FORM DEMO
===================================================== */

const contactForm =
    document.querySelector(".contact-form");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you for your message. " +
            "The contact form will be connected to a backend later."
        );

        contactForm.reset();

    });

}
```
