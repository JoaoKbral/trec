import { gsap } from "../node_modules/gsap/index.js";

import { ScrollTrigger } from "../node_modules/gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const horizontalSection = document.querySelector(".horizontal")
const thisPinWrap = horizontalSection.querySelector('.pin-wrap');
const thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');

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
    end: () => thisAnimWrap.scrollWidth > 3000 ? (-1 * getToValue()) : 2500,
    // end: ()=> -getToValue(), 
    pin: thisPinWrap,
    // anticipatePin: 1,
    scrub: true,
    //markers: true,

  }
});
