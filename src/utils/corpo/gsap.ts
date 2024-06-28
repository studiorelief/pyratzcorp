import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function approachAnim() {
  /**
   ** Éléments
   */

  const step1: string = '.corpo-approach_step-percent.is-1';
  const step2: string = '.corpo-approach_step-percent.is-2';
  const step3: string = '.corpo-approach_step-percent.is-3';
  const step4: string = '.corpo-approach_step-percent.is-4';

  const elemDarkEye: string = '.corpo-approach_image.is-dark-eye';
  const elemBase: string = '.corpo-approach_image.is-base';
  const elemGlossyEye: string = '.corpo-approach_image.is-glossy-eye';
  const elemRadar: string = '.corpo-approach_image.is-radar';
  const elemBullet: string = '.corpo-approach_image.is-bullet';
  const elemRocket: string = '.corpo-approach_image.is-rocket';
  const elemGrille: string = '.corpo-approach_image.is-grille';

  /**
   ** Initialisation
   */

  gsap.set([elemDarkEye, elemBase, elemGlossyEye, elemRadar, elemBullet, elemRocket, elemGrille], {
    opacity: 0,
  });

  gsap.set(elemRocket, {
    opacity: 1,
    scale: 0.25,
  });

  /**
   ** Step 1
   *! En cours
   */

  ScrollTrigger.create({
    trigger: step1,
    start: '-50% 75%',
    end: '125% 75%',
    markers: false,
    onEnter: () => {
      gsap.to([elemBase, elemGrille, elemRadar, elemBullet], {
        opacity: 1,
      });
      gsap.to(elemRadar, {
        rotation: -360,
        duration: 2,
        ease: 'linear',
        repeat: -1,
      });
      gsap.to(elemBullet, {
        rotation: -360,
        duration: 30,
        ease: 'linear',
        repeat: -1,
      });
    },
    onLeave: () => {
      gsap.to([elemRadar, elemBullet], {
        opacity: 0,
        duration: 0.25,
      });
      gsap.to(elemGrille, {
        opacity: 1,
        scale: 0.26,
      });
      gsap.killTweensOf([elemRadar, elemBullet], { rotation: true });
      gsap.set([elemRadar, elemBullet], { rotation: 0 });
    },
    onEnterBack: () => {
      gsap.to([elemGrille, elemRadar, elemBullet], {
        opacity: 1,
        duration: 0.5,
        scale: 1,
      });
      gsap.to(elemRadar, {
        rotation: -360,
        duration: 2,
        ease: 'linear',
        repeat: -1,
      });
      gsap.to(elemBullet, {
        rotation: -360,
        duration: 30,
        ease: 'linear',
        repeat: -1,
      });
    },
    onLeaveBack: () => {
      gsap.killTweensOf([elemRadar, elemBullet], { rotation: true });
      gsap.set([elemRadar, elemBullet], { rotation: 0 });
    },
  });

  ScrollTrigger.create({
    trigger: step1,
    start: '0% 75%',
    end: '100% 75%',
    scrub: true,
    markers: false,
    onUpdate: (self) => {
      const { progress } = self;
      gsap.to('.corpo-approach_process-line.is-step-1', {
        width: progress * 100 + '%',
      });
    },
  });

  /**
   ** Step 2
   *! En cours
   */

  ScrollTrigger.create({
    trigger: step2,
    start: '0% 75%',
    end: '15% 75%',
    markers: false,

    onEnter: () => {
      gsap.to([elemRadar, elemBullet], {
        opacity: 0,
        duration: 0.25,
      });
      gsap.to(elemGrille, {
        opacity: 1,
        scale: 0.26,
      });
      gsap.to(elemRocket, {
        opacity: 1,
        scale: 0,
      });
      gsap.to(elemRocket, {
        opacity: 1,
        scale: 0.25,
      });
    },
    onLeave: () => {
      /* gsap.to(elemGrille, {
        opacity: 0,
        scale: 0,
      }); */
      gsap.to(elemRocket, {
        scale: 1,
        duration: 2,
        onComplete: () => {
          gsap.to(elemRocket, {
            scale: 1.1,
            duration: 1.5,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
          });
        },
      });
    },
    onEnterBack: () => {
      gsap.killTweensOf(elemRocket, { scale: true, opacity: true });
      gsap.to(elemRocket, {
        opacity: 1,
        scale: 0.25,
      });
      gsap.to(elemGrille, {
        opacity: 1,
        scale: 0.26,
      });
    },
    onLeaveBack: () => {
      gsap.to(elemRocket, {
        opacity: 1,
        scale: 0,
        duration: 0.5,
      });
    },
  });

  ScrollTrigger.create({
    trigger: step2,
    start: '2.5% 75%',
    end: '100% 75%',
    scrub: true,
    markers: false,
    onUpdate: (self) => {
      const { progress } = self;
      gsap.to('.corpo-approach_process-line.is-step-2', {
        width: progress * 100 + '%',
      });
    },
  });

  /* ScrollTrigger.create({
    trigger: step2,
    start: '30% 75%',
    end: '100% 75%',
    scrub: true,
    markers: true,
    onUpdate: (self) => {
      const { progress } = self;

      gsap.to(elemDarkEye, {
        opacity: progress,
      });
    },
  }); */

  /**
   ** Step 3
   */

  ScrollTrigger.create({
    trigger: step3,
    start: '0% 75%',
    end: '125% 75%',
    markers: false,
    onEnter: () => {
      gsap.killTweensOf(elemRocket, { scale: true, opacity: true });
      gsap.set(elemDarkEye, {
        scale: 0.25,
        opacity: 1,
      });
      gsap.to(elemRocket, {
        opacity: 0,
        scale: 2.5,
        duration: 2,
      });
      gsap.to(elemDarkEye, {
        opacity: 1,
        scale: 1,
        duration: 2,
        delay: 0,
      });
      gsap.to(elemDarkEye, {
        rotation: 360,
        duration: 15,
        ease: 'linear',
        repeat: -1,
      });
    },
    onLeave: () => {
      gsap.to(elemDarkEye, {
        opacity: 0,
        scale: 1,
      });
    },
    onEnterBack: () => {
      gsap.to(elemDarkEye, {
        opacity: 1,
        scale: 1,
      });
      gsap.set(elemDarkEye, {
        rotation: 0,
      });
      gsap.to(elemDarkEye, {
        rotation: 360,
        duration: 25,
        ease: 'linear',
        repeat: -1,
      });
    },
    onLeaveBack: () => {
      gsap.killTweensOf(elemDarkEye, { rotation: true, scale: true });

      gsap.to(elemDarkEye, {
        opacity: 0,
        scale: 0,
      });
      gsap.killTweensOf(elemRocket, { scale: true, opacity: true });

      gsap.to(elemRocket, {
        opacity: 1,
        scale: 1,
        onComplete: () => {
          gsap.to(elemRocket, {
            scale: 1.1,
            duration: 1,
            repeat: -1,
            yoyo: true,
          });
        },
      });
    },
  });

  ScrollTrigger.create({
    trigger: step3,
    start: '2.5% 75%',
    end: '100% 75%',
    scrub: true,
    markers: false,
    onUpdate: (self) => {
      const { progress } = self;
      gsap.to('.corpo-approach_process-line.is-step-3', {
        width: progress * 100 + '%',
      });
    },
  });

  /**
   ** Step 4
   */

  ScrollTrigger.create({
    trigger: step4,
    start: '0% 75%',
    end: '150% 75%',
    markers: false,
    onEnter: () => {
      gsap.to(elemDarkEye, {
        opacity: 0,
        scale: 1,
        overwrite: true,
      });
      gsap.to(elemGlossyEye, {
        opacity: 1,
      });
    },
    onEnterBack: () => {
      gsap.to(elemGlossyEye, {
        opacity: 1,
        scale: 1,
      });
    },
    onLeave: () => {
      gsap.to(elemGlossyEye, {
        opacity: 0,
      });
    },
    onLeaveBack: () => {
      gsap.to(elemGlossyEye, {
        opacity: 0,
      });
    },
  });

  ScrollTrigger.create({
    trigger: step4,
    start: '2.5% 75%',
    end: '100% 75%',
    scrub: true,
    markers: false,
    onUpdate: (self) => {
      const { progress } = self;
      gsap.to('.corpo-approach_process-line.is-step-4', {
        width: progress * 100 + '%',
      });
    },
  });
}
