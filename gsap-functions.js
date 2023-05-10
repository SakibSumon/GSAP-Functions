 ScrollTrigger.batch(".slider-anim", {
    start: "top 90%",
    onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: .12, duration: .3}),
})