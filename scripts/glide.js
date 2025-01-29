// import Glide from "../node_modules/@glidejs/glide/dist/glide.js";
import Glide from '../node_modules/@glidejs/glide/dist/glide.esm.js';

new Glide('.glide', {
    type: 'carousel',
    startAt: getRndInteger(0, 2),
    perView: 1,
    hoverpause: true,
    autoplay: 2500,
    peek: {
        before: 200,
        after: 200
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