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

var timeOut;

function circleSlimWhenMouseMove() {
  // define default scale value

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (details) {
    clearTimeout(timeOut);
    xscale = gsap.utils.clamp(0.8, 1.2, details.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, details.clientY - yprev);

    xprev = details.clientX;
    yprev = details.clientY;

    circleMouseFollower(xscale, yscale);

    timeOut = this.setTimeout(function () {
      document.querySelector(
        "#mini-circle"
      ).style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1, 1)`;
    });
  });
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
circleSlimWhenMouseMove();

// when mouse enter image section then select three element and apply each element

document.querySelectorAll(".element").forEach(function (singleElement) {

   var rotate = 0;
   var diffRot = 0;

  singleElement.addEventListener("mousemove", function (details) {
   
   var diff = details.clientY - singleElement.getBoundingClientRect().top;
   var diffRot = details.clientX - rotate;
   rotate = details.clientX
    gsap.to(singleElement.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: details.clientX,
      rotate: gsap.utils.clamp(-20,20, diffRot * 0.5)
    });
  });
});

// mouse leave then hide image
document.querySelectorAll(".element").forEach(function (singleElement) {
   singleElement.addEventListener("mouseleave", function (details) {
    
     gsap.to(singleElement.querySelector("img"), {
       opacity: 0,
       ease: Power3,
       duration: 0.5,
     });
   });
 });
