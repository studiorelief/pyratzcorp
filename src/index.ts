import './index.css';

import { approachAnim } from '$utils/corpo/gsap';
import { experienceAnim, LaunchAnim } from '$utils/founders/gsap';
import { loadModelViewerScript } from '$utils/loadModalViewer';
import { videoLoop } from '$utils/loadScript';
import { loadScript } from '$utils/loadScript';
import { howStratzTabs } from '$utils/stratz/autotabs';
import { rotateBulletStratz } from '$utils/stratz/gsap';
import { homeSwiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js'),
  ]);

  // Global
  loadModelViewerScript();

  videoLoop();

  // Pages
  if (window.location.pathname === '/') {
    homeSwiper();
    approachAnim();
  }

  if (window.location.pathname.includes('/founders')) {
    experienceAnim();
    LaunchAnim();
  }

  if (window.location.pathname.includes('/stratz')) {
    rotateBulletStratz();
    howStratzTabs();
  }
});
