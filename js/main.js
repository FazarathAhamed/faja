/*==================================== toggle icon navbar ====================================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
}

/*==================================== scroll section active link ====================================*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

const handleScroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector("header nav a[href*='" + id + "']").classList.add("active");
            });
        }
    });

    /*==================================== toggle icon navbar ====================================*/
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    /*==================================== remove toggle icon and navbar ====================================*/
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
};

window.onscroll = handleScroll;
window.onload = handleScroll;

/*==================================== scroll reveal ====================================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

ScrollReveal().reveal('.home-content, heading', { origin: 'top'});
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box', { origin: 'buttom' });
 ScrollReveal().reveal('.home-contact h1, .about-img ', { origin: 'left' });
 ScrollReveal().reveal('.home-contact p, .about-content,' , { origin: 'right' });
 ScrollReveal().reveal('.contact form', {
    origin: 'bottom', // Flip from the bottom
    distance: '0px', // No distance
    duration: 1000, // Duration of 1 second
    delay: 200, // Delay of 200ms
    rotate: { x: 0, y: 180, z: 0 }, // Flip around the Y-axis
    easing: 'ease-in-out' // Easing function
});
// Initialize ScrollReveal
ScrollReveal().reveal('.about-img', {
    origin: 'bottom', // Animation starts from the bottom
    distance: '50px', // Distance to move the element
    duration: 1000, // Duration of the animation
    delay: 200, // Delay before the animation starts
    opacity: 0, // Start with opacity 0
    scale: 0.9, // Scale down the image
    easing: 'ease-in-out' // Easing function for the animation
});
 ScrollReveal().reveal('.service-box', {
    scale: 0.5, // Start at half size
    duration: 900, // Duration of 0.9 seconds
    delay: 250, // Delay of 250ms
    easing: 'ease-out' // Easing function
});
ScrollReveal().reveal('.social-media a', {
    duration: 800, // Duration of 0.8 seconds
    delay: 200, // Delay of 200ms
    afterReveal: (el) => {
        el.style.animation = 'wobble 1s'; // Apply wobble animation
    }
});


/*==================================== typed js ====================================*/
document.addEventListener("DOMContentLoaded", function() {
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Web Developer', 'Graphics Designer'],
        typeSpeed: 70,
        backSpeed: 10,
        backDelay: 1000,
        loop: true
    });
});




/*==================================== contact form submission ====================================*/
document.querySelector("#contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate form submission
    console.log("Form submitted successfully!");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // Clear form fields
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";

    // Display success message
    let successMessage = document.createElement("div");
    successMessage.className = "success-message";
    successMessage.innerText = "Your message has been sent successfully!";
    document.querySelector("#contact-form").appendChild(successMessage);

    // Remove success message after 5 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
});
/*==================================== back to top button ====================================*/
let backToTopButton = document.querySelector("#back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});





