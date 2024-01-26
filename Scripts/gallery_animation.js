const { ScrollTrigger } = require("@terwanerik/scrolltrigger");

gsap.registerplugin(ScroollTriger);

const body = document.querySelector('body');
const init = () => {
    gsap.set(body, { overflow: 'hidden'});
    gsap.set(introCard[0], { scale: 0.6 });

    initLenis();
    initScrollHero();
    initScrollMedia();
}

const initLenis = () => {
    const lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticket.add((time) => lenis.raf(time * 1000));
    gsap.ticket.lagSmoothing(0);
}

window.addEventListener("DOMContentLoaded", () => {
    initLenis();
    initscrollMedia();
})