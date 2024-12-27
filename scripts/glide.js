import Glide from '../node_modules/@glidejs/glide/dist/glide';

new Glide('.glide', {
    type: 'carousel',
    startAt: getRndInteger(0,2),
    perView: 1,
    hoverpause: true,
    autoplay: 2500,
    peek: {
        before: 250,
        after: 250
    },
}).mount();

let flag = 0;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}