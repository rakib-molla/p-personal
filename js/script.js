const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from(".hero-footer", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

function circleSlimWhenMouseMove(){
   // define default scale value

   var xprev = 0;
   var yprev = 0;

   window.addEventListener("mousemove", function(details){
     
      xscale =   gsap.utils.clamp(.8, 1.2, details.clientX - xprev);
      yscale =   gsap.utils.clamp(.8, 1.2, details.clientY - yprev);

      xprev = details.clientX;
      yprev = details.clientY;

      circleMouseFollower(xscale, yscale);
     
   })
}


function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (details) {
    // console.log(details.clientX, details.clientY)
    document.querySelector(
      "#mini-circle"
    ).style.transform = `translate(${details.clientX}px, ${details.clientY}px)  scale(${xscale}, ${yscale})`;
  });
}

circleMouseFollower();
firstPageAnim();
circleSlimWhenMouseMove()
