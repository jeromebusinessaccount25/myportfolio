/*=============== menu icon ==============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/*=============== active ==============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    
    });


      /*=============== bar ==============*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

};
/*=============== scroll ==============*/
ScrollReveal({
     //reset: true, 
     distance: '80px',
     duration: 2000,
     delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .abount-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .abount-content', { origin: 'right' });


/*=============== name ==============*/
const typed = new Typed('.multiple-text', {
    strings: ['IT STUDENT', 'BSIT 1-6' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

const type = new Typed('.text', {
    strings: ['Jerome', 'Jome' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

const types = new Typed('.about-me', {
    strings: ['ME!' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

const typede = new Typed('.contact-me', {
    strings: ['ME!' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


const typedes = new Typed('.service', {
    strings: ['Services' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

const typedess = new Typed('.Project', {
    strings: ['Project' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})