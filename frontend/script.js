var tl = gsap.timeline()
function nav(){
    tl.from("#nav h1,#nav #rightnav ul li,#nav #rightnav button",{
        y:-30,
        opacity:0,
        stagger:0.1,

        
    })
}
nav();

function hero(){
tl.from("#heroleft h1,#heroleft p,#heroleft button",{
    x:-100,
    opacity:0,
    stagger:0.1

});
tl.from("#heroright img",{
    x:100,
    opacity:0,
})
}
hero() 

function services(){
    
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section2",
    scroller: "body",
    start: "top 70%",
    end: "top -10%",
    scrub: 1,
  },
});
tl2.from("#services h1", {
  y: -30,
  opacity: 0,
  duration: 0.4,
});
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section2",
    scroller: "body",
    start: "top 70%",
    end: "top -10%",
    scrub: 1,
    markers: true,
  },
});
tl3.from(
  "#does .box1",
  {
    x: -100,
    opacity: 0,
    duration: 0.2,
  },
  "anim1"
);
tl3.from(
  "#does .box2",
  {
    x: 100,
    opacity: 0,
    duration: 0.2,
  },
  "anim1"
);
tl3.from(
  "#does .box3",
  {
    x: -100,
    opacity: 0,
    duration: 0.2,
  },
  "anim2"
);
tl3.from(
  "#does .box4",
  {
    x: 100,
    opacity: 0,
    duration: 0.2,
  },
  "anim2"
);
}
services()

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#proposal",
    scroller: "body",
    start: "top 70%",
    end: "top -10%",
    markers: true,
    scrub: 1,
  },
});
function proposal(){
tl4.from("#proposal-left h2,#proposal-left p,#proposal-left button", {
  opacity: 0,
  y: -30,
 
  stagger:0.1
},"anime4");

tl4.from("#proposal-right img",{
    opacity:0,
    x:100,

},"anime4")
}
proposal();

tl4.from(".case-items",{
  opacity:0,
  scale:0

})