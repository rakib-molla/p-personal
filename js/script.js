const scroll = new LocomotiveScroll({
   el: document.querySelector('#main'),
   smooth: true
});

function firstPageAnim(){
   var tl = gsap.timeline();

   tl.from('#nav',{
      y: '-10',
      opacity: 0,
      duration: 2,
      ease: Expo.easeInOut
   })
   .to('.boundingelem',{
      y:0,
      ease: Expo.easeInOut,
      duration: 2,
      stagger: .2,
   })
}

function circleMouseFollower(){
  window.addEventListener("mousemove", function(details){
   // console.log(details.clientX, details.clientY)
   document.querySelector("#mini-circle").style.transform = `translate(${details.clientX}px, ${details.clientY}px)`
  })
}

circleMouseFollower();
firstPageAnim()