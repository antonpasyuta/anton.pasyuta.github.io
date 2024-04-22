
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)



document.addEventListener('mousemove', ev =>{
  Object.assign(document.documentElement,{
    style: `
    --move-x: ${(ev.clientX-window.innerWidth/2) * -0.03}deg;
    --move-y: ${(ev.clientX-window.innerHeight/2)* -0.01}deg;

    `
  })
} )



if (ScrollTrigger.isTouch!==1){
  ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smooth: 1.3,
  effects: true,

  })
  gsap.fromTo('.bg_head .worker', {x: 500, opacity:0},{
  x: 0, opacity: 1,
  scrollTrigger:{
    trigger: '.worker',
    start: '-200',
    end: '-50',
    scrub: true
  }
})
gsap.fromTo('.layers', {opacity: 1},{
  opacity: 0,
  scrollTrigger:{
    trigger: '.layers',
    start: 'center',
    end: '3000',
    scrub: true
  }
})

gsap.fromTo('.BLOCK_VR', {opacity: 0},{
  opacity: 1,
  scrollTrigger:{
    trigger: '.BLOCK_VR',
    start: '-800',
    end: '500',
    scrub: true
  }
})
gsap.fromTo('.VR_SHOW', {x: -100},{
  x: 100,
  scrollTrigger:{
    trigger: '.BLOCK_VR',
    start: '-800',
    end: '100',
    scrub: true
  }
})

gsap.fromTo('.BLOCK_VR', {opacity: 1},{
  opacity: 0,
  scrollTrigger:{
    trigger: '.BLOCK_VR',
    start: '400',
    end: '750',
    scrub: true
  }
})


gsap.fromTo('.BLOCK_COURSE', {opacity: 0},{
  opacity: 1,
  scrollTrigger:{
    trigger: '.BLOCK_COURSE',
    start: '-1000',
    end: '200',
    scrub: true
  }
})
  gsap.fromTo('.COURSE_SHOW', {x: 100},{
  x: 0,
  scrollTrigger:{
    trigger: '.BLOCK_COURSE',
    start: '-1000',
    end: '200',
    scrub: true
  }
})
gsap.fromTo('.BLOCK_COURSE', {opacity: 1},{
  opacity: 0,
  scrollTrigger:{
    trigger: '.BLOCK_COURSE',
    start: '100',
    end: '800',
    scrub: true
  }
})
  gsap.fromTo('.BLOCK_TRAIN', {opacity: 0},{
  opacity: 1,
  scrollTrigger:{
    trigger: '.BLOCK_COURSE',
    start: '300',
    end: '1000',
    scrub: true
  }
})
   gsap.fromTo('.TRAIN_SHOW', {x: -100},{
  x: 0,
  scrollTrigger:{
    trigger: '.BLOCK_COURSE',
    start: '300',
    end: '1000',
    scrub: true
  }
})
  gsap.fromTo('.BLOCK_TRAIN', {opacity: 1},{
  opacity: 0,
  scrollTrigger:{
    trigger: '.BLOCK_COURSE',
    start: '1500',
    end: '2000',
    scrub: true
  }
})
}
var swiper = new Swiper(".mySwiper_VR", {
      spaceBetween: 300,
      speed: 800,
      loop: true,

      keyboard: true,
  navigation: {
        nextEl: '.nav_next',
        prevEl: '.nav_prev'
  }
    });

var swiper_course = new Swiper(".mySwiper_Course", {
      spaceBetween: 200,
      speed: 800,
loop: true,

      keyboard: true,
  navigation: {
        nextEl: '.nav_next',
        prevEl: '.nav_prev'
                }
    });
var swiper_train = new Swiper(".mySwiper_TRAIN", {
      spaceBetween: 300,
      speed: 800,

    loop: true,
      keyboard: true,
  navigation: {
        nextEl: '.nav_next',
        prevEl: '.nav_prev'
                }
    });
var swiper_VR_text = new Swiper(".mySwiper_VR_TEXT", {
      spaceBetween: 150,
      speed: 800,

      mousewheel: true,
      keyboard: true,
    });

