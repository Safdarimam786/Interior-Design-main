const tl = gsap.timeline();

tl.from('.logo',{
    opacity: 0,
    scale: .8,
    duration: 2,
    ease: "Expo.easeInOut",
})
tl.from('.navEle',{
    opacity: 0,
    scale: .8,
    duration: 1.5,
    ease: "Expo.easeInOut",
},'-=1.5')
tl.from('.head1, .head2',{
    opacity: 0,
    scale: .7,
    duration: 1.5,
    ease: "Expo.easeInOut",
},'-=1.5')
tl.from('#bg-img',{
    opacity: 0,
    scale: .7,
    duration: 2,
    ease: "Expo.easeInOut",
},'-=1.5')
tl.from('.background img',{
    opacity: 0,
    scale: .5,
    duration: 1.5,
    ease: "Expo.easeInOut",
},'-=1.5')
tl.from('.content',{
    opacity: 0,
    scale: 0,
    duration: 1.5,
    ease: "Expo.easeInOut",
},'-=1.5')
gsap.from('.icons i',{
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "Expo.easeInOut",
    stagger: .1,
    scrollTrigger: {
        trigger: ".icons i",
        scroller: "body",
        start: "top 75%",
        end: "top 40%",
        scrup: 2,
    }
})
gsap.from('.pg3-left img',{
    opacity: 0,
    x: 200,
    duration: 1.5,
    ease: "Expo.easeInOut",
    scrollTrigger: {
        trigger: ".pg3-left img",
        scroller: "body",
        start: "top 65%",
        end: "top 20%",
        scrup: 2,
    }
})
gsap.from('.pg3-right, .pg3-content h1, .pg3-content p, .pg3-content button',{
    opacity: 0,
    x: -200,
    duration: 1,
    ease: "Expo.easeInOut",
    stagger: .1,
    scrollTrigger: {
        trigger: ".pg3-right, .pg3-content h1, .pg3-content p, .pg3-content button",
        scroller: "body",
        // markers: true,
        start: "top 65%",
        end: "top 20%",
        scrup: 2,
    }
})
gsap.from('.page4, .page4 h1, .card i, .card h3, .card p',{
    opacity: 0,
    scale: .5,
    duration: 1,
    ease: "Expo.easeInOut",
    stagger: .1,
    scrollTrigger: {
        trigger: ".page4 h1, .card i, .card h3, .card p",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        scrup: 2,
    }
})
gsap.from('.cntnt h1, .cntnt h5, .cntnt p, .cntnt button',{
    opacity: 0,
    scale: .8,
    x: -100,
    duration: 1,
    ease: "Expo.easeInOut",
    stagger: .2,
    scrollTrigger: {
        trigger: ".cntnt h1, .cntnt h5, .cntnt p, .cntnt button",
        scroller: "body",
        start: "top 50%",
        end: "top 30%",
        scrup: 2,
    }
})
gsap.from('.img1 img, .img2 img',{
    opacity: 0,
    scale: .5,
    duration: 2,
    ease: "Expo.easeInOut",
    stagger: .3,
    scrollTrigger: {
        trigger: ".img1 img, img2 img",
        scroller: "body",
        start: "top 50%",
        end: "top 30%",
        scrup: 2,
    }
})
gsap.from('.map img',{
    opacity: 0,
    duration: 2,
    ease: "Expo.easeInOut",
    scrollTrigger: {
        trigger: ".map img",
        scroller: "body",
        start: "top 50%",
        end: "top 30%",
        scrup: 2,
    }
})
gsap.from('.contact-details h1, .contact-details p, .contact-details input, .contact-details button',{
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: "Expo.easeInOut",
    scrollTrigger: {
        trigger: ".contact-details h1, .contact-details p, .contact-details input, .contact-details button",
        scroller: "body",
        start: "top 70%",
        end: "top 30%",
        scrup: 2,
    }
})
gsap.from('.dtls h1',{
    opacity: 0,
    duration: 1,
    ease: "Expo.easeInOut",
    scrollTrigger: {
        trigger: ".dtls h1",
        scroller: "body",
        start: "top 70%",
        // markers: true,
        end: "top 40%",
        scrup: 2,
    }
})
gsap.from('.dtls p, .vLogo img',{
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "Expo.easeInOut",
    stagger: .1,
    scrollTrigger: {
        trigger: ".dtls p, .vLogo img",
        scroller: "body",
        start: "top 70%",
        // markers: true,
        end: "top 40%",
        scrup: 2,
    }
})
gsap.from('.boyImg img',{
    opacity: 0,
    y: 100,
    scale: 0,
    duration: 1.2,
    ease: "Expo.easeInOut",
    scrollTrigger: {
        trigger: ".boyImg img",
        scroller: "body",
        start: "top 80%",
        // markers: true,
        end: "top 40%",
        scrup: 2,
    }
})

gsap.from('.footer-logo img, .footer-logo h2, .footer-logo~p, .boxes h2, .boxes a, .footer-box~p, .footer-logo i',{
    opacity: 0,
    duration: 1,
    ease: "Expo.easeInOut",
    stagger: .07,
    scrollTrigger: {
        trigger: ".footer-logo img, .footer-logo h2, .footer-logo~p, .boxes h2, .boxes a, .footer-box~p, .footer-logo i",
        scroller: "body",
        start: "top 70%",
        // markers: true,
        end: "top 40%",
        scrup: 2,
    }
})

