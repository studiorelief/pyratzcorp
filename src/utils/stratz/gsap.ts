import gsap from 'gsap';
/* import ScrollTrigger from 'gsap/ScrollTrigger'; */

/* gsap.registerPlugin(ScrollTrigger); */

export function rotateBulletStratz() {
  gsap.to(['.stratz-opportunity_loop', '.stratz-experience_icons'], {
    rotateZ: 360,
    repeat: -1,
    duration: 5,
    ease: 'linear',
  });
}
