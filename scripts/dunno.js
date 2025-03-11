import { gsap } from "../node_modules/gsap/index.js";

import { ScrollTrigger } from "../node_modules/gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const horizontalSection = document.querySelector(".horizontal")
let thisPinWrap = horizontalSection.querySelector('.pin-wrap');
let thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');

let getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

gsap.fromTo(thisAnimWrap, {
  x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue()
}, {
  x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0,
  ease: "none",
  // maxWidth: "1440px",
  scrollTrigger: {
    trigger: horizontalSection,
    start: "top top",
    end: () => -getToValue(),
    pin: thisPinWrap,
    // anticipatePin: 1,
    scrub: true,
    //markers: true,

  }
});

gsap.to(".captura", {
  snap: {

  }
});