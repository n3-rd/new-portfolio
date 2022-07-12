
// check if device is not mobile
if ( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    magicMouse({
        "hoverEffect": "pointer-overlay",
    });
}

tailwind.config = {
  theme: {
    fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['Prata', 'Gilda Display', 'serif'],
        'mono': ['Averia Serif Libre', 'cursive'],
      }
  }
}

// enable locomotive-scroll on mobile

var scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: {
       smooth: true
   },
   tablet: {
       smooth: true
   }
});

const greetings = [
    "Yo!",
    "Sup!",
    "Hello!",
    "Hi!",
    "Hey!",
    "Howdy!",
    "Hi There!"   
]

const overlayText = document.getElementById('overlay-text');

overlayText.textContent = greetings[Math.floor(Math.random() * greetings.length)];

document.addEventListener('DOMContentLoaded', () => {
gsap.to(".overlay",{
    duration: 4,
    opacity: 0,
    ease: "power3.out",
    onComplete: () => {
        document.querySelector(".overlay").remove();
    }
})


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".welcome-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: true,
        id: "welcome-text-reveal"
    }
});
tl.from(".welcome-text", {
    duration: 1,
    opacity: 0,
    y: -100,
    ease: "power3.out",
    delay: 2
}).from(".welcome-text-header", {
    duration: 1,
    opacity: 0,
    y: -100,
    ease: "power3.out"
}).from(".welcome-text-description", {
    duration: 1,
    opacity: 0,
    y: -100,
    ease: "power3.out"
}).from(".links", {
    duration: 1,
    opacity: 0,
    y: -100,
    ease: "power3.out"
});






});

