// import Glide from "../node_modules/@glidejs/glide/dist/glide.js";
import Glide from '../node_modules/@glidejs/glide/dist/glide.esm.js';

new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    hoverpause: false,
    autoplay: true,
    peek: {
        before: 0,
        after: 0
    },
    // breakpoints: {
    //     1440: {
    //         peek: {
    //             before: 200,
    //             after: 200
    //         },
    //     },

    //     420: {
    //         peek: {
    //             before: 0,
    //             after: 0
    //         },
    //     }
    // }
}).mount();

let flag = 0;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}