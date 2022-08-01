// check if device is not mobile
if (
  !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  magicMouse({
    hoverEffect: "pointer-overlay",
  });
}

tailwind.config = {
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["Prata", "Gilda Display", "serif"],
      mono: ["Averia Serif Libre", "cursive"],
    },
  },
};

// add magic-hover class to every link
const addMagicHover = () => {
  document.querySelectorAll("a").forEach((link) => {
    link.classList.add("magic-hover");
  });
}

addMagicHover();

// enable locomotive-scroll on mobile

var scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  smartphone: {
    smooth: true,
  },
  tablet: {
    smooth: true,
  },
});

const animateMobileMenu = ()=>{
  // reveal menu with gsap
  const menu = document.querySelector('.mobile-menu');
  const menuButton = document.querySelector('.mobile-menu-button');
  const closeMenu = document.querySelector('.mobile-menu__close');
  const mobileMenuItem = document.querySelectorAll('.mobile-menu__item');



  const openMobileMenu = ()=>{
      gsap.to(menu, {
        duration: 0.5,
        ease: 'power3.out',
        opacity: 1,
        y: 0,
        stagger: {
          amount: 0.2,
          from: 'bottom',
        },
        onplay: () => {
          menu.classList.toggle('hidden');
          // scroll.destroy();
        }
      });
  }
  
  const closeMobileMenu = ()=>{
    gsap.to(menu, {
      duration: 0.5,
      ease: 'power3.out',
      opacity: 0,
      y: -100,
      stagger: {
        amount: 0.2,
        from: 'bottom',
      },
      onComplete: () => {
        menu.classList.toggle('hidden');
        // scroll.init();
      }
    });
  }

  menuButton.addEventListener('click', openMobileMenu);
  closeMenu.addEventListener('click', closeMobileMenu);
  mobileMenuItem.forEach(item => {
    item.addEventListener('click', ()=>{
      // prevent default behavior
      event.preventDefault();
      // close menu
      closeMobileMenu();
      // scroll to section
      const section = document.getElementById('projects-section');
      scroll.scrollTo(section);

    })
  }
  );


}


// toggleMenu()




barba.init({
  transitions: [
    {
      name: "default",
      leave: function (data) {
        return new Promise(function (resolve) {
          var done = function () {
            resolve();
          };
          var tl = new TimelineMax();
          tl.to(data.current.container, 0.5, {
            opacity: 0,
            onComplete: done,
          });
        });
      },
      enter: function (data) {

          options = {
            "cursorOuter": "disable",
            "hoverEffect": "pointer-overlay",
            "hoverItemMove": false,
            "defaultCursor": false,
            "outerWidth": 41,
            "outerHeight": 41
          }; 
           magicMouse(options);
        scroll.init();

        return new Promise(function (resolve) {
          var done = function () {
            resolve();
          };
          var tl = new TimelineMax();
          tl.to(data.next.container, 0.5, {
            opacity: 1,
            onComplete: done,
          });
        });
      },
      afterLeave: function (data) {
        data.current.container.style.display = "none";
        // magicMouse.destroy();
        scroll.destroy();
      },
    },
  ],
});

const showIntro = () => {
  const greetings = [
    "Yo!",
    "Sup!",
    "Hello!",
    "Hi!",
    "Hey!",
    "Howdy!",
    "Hi There!",
  ];

  const overlayText = document.getElementById("overlay-text");

  overlayText.textContent =
    greetings[Math.floor(Math.random() * greetings.length)];
  gsap.to(".overlay", {
    duration: 4,
    opacity: 0,
    ease: "power3.out",
    onComplete: () => {
      document.querySelector(".overlay").remove();
    },
  });



  var tl = gsap.timeline({
  });
  tl.from(".welcome-text", {
    duration: 1,
    opacity: 0,
    y: -100,
    ease: "power3.out",
    delay: 2,
  })
    .from(".welcome-text-header", {
      duration: 1,
      opacity: 0,
      y: -100,
      ease: "power3.out",
    })
    .from(".welcome-text-description", {
      duration: 1,
      opacity: 0,
      y: -100,
      ease: "power3.out",
    })
    .from(".links", {
      duration: 1,
      opacity: 0,
      y: -100,
      ease: "power3.out",
    });
};



  const scrollToPart = () => {
    const scrollLink = document.querySelector('[scroll-to]');
    scrollLink.addEventListener('click', (event) => {
      event.preventDefault();
      const section = scrollLink.getAttribute('scroll-to');
      console.log(section)
      scroll.scrollTo(document.getElementById(section));
    }
    
      );
  }

  scrollToPart();

document.addEventListener("DOMContentLoaded", () => {
 
});
