
//cursor

var crsr = document.querySelector("#cursor")
var crsr_b = document.querySelector("#cursor-b")

document.addEventListener("mousemove",function(vin){
    //console.log(vin);
    crsr.style.left =vin.x+"px"
    crsr.style.top =vin.y+"px"

})

document.addEventListener("mousemove",function(vin){
    //console.log(vin);
    crsr_b.style.left =vin.x-170 +"px"
    crsr_b.style.top =vin.y-170+"px"
    
})
//nav 

var h4all = document.querySelectorAll("#nav h4")
//console.log(h4all);
h4all.forEach(function(elem){
    //console.log(elem);
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #bda677"
        crsr.style.backgroundColor="#bda677"
    })
    
})

var h4all = document.querySelectorAll("#nav-1 h4")
//console.log(h4all);
h4all.forEach(function(elem){
    //console.log(elem);
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #bda677"
        crsr.style.backgroundColor="#bda677"
    })
    
})


gsap.to("#nav",{
    backgroundColor:"#bda667",
    height:"110px",
    duration:0.5,
    //delay:1
    scrollTrigger:{
        trigger:"#nav",
        scroll:"body",
      start:"top -10%",
      end:"top -11%",
      scrub:1
    }
})

gsap.to("#nav-1",{
    backgroundColor:"#bda667",
    height:"110px",
    duration:0.5,
    //delay:1
    scrollTrigger:{
        trigger:"#nav-1",
        scroll:"body",
      start:"top -10%",
      end:"top -11%",
      scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:1
    }
})

//trigger
gsap.from("#page2-1 img , #page2-1-1",{
    y:90,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page2-1",
        scroller:"body",
       // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

// //card

// gsap.from(".card",{
//     scale:0.8,
//     opacity:0,
//     duration:1,
//     stagger:0.1,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body",
//        // markers:false,
//         start:"top 70%",
//         end:"top 68%",
//         scrub:2
//     }
// })

//colom
gsap.from("#col1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})


gsap.from("#col2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})