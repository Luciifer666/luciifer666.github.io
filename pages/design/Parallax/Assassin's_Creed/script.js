const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#parallax",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
});

gsap.utils.toArray('.layer').forEach(layer => {
    const speed = layer.dataset.speed;
    const movement = -(layer.offsetHeight * speed);
    
    tl.to(layer, { y: movement, ease: "none" }, 0);
});