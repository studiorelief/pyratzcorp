import 'swiper/css/bundle';

// @ts-expect-error : swiper bundle root
import Swiper from 'swiper/bundle';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';

// Swiper home
export function homeSwiper() {
  new Swiper('.swiper.is-home', {
    modules: [Navigation, Mousewheel, Keyboard],
    direction: 'horizontal',
    grabCursor: false,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    centeredSlides: true,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: false,
      disableOnInteraction: false,
      reverseDirection: false,
    },
    speed: 2500,
  });
}
