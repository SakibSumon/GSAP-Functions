 //this function is used to animate the elements on the page on a staggerring basis. this requires the gsap library to be loaded in the html file along with the scrolltrigger plugin and customAnimation plugin before this file is loaded.
 
 ScrollTrigger.batch(".staggering", {
    start: "top 90%",
    onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: .12, duration: .3}),
})
