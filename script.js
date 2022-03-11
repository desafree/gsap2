const tl = gsap.timeline({paused: true})
    // .to('.box',{backgroundColor: 'transparent', duration:.1})
    .to('.box',{width:"160px",height:"160px", rotation:45, duration:.5,ease: Expo.easeOut},0)
    .to('.line-vertical',{height:0,backgroundColor: 'transparent',ease: Power1.easeIn, duration:.2},'<')
    .to('.line-horizontal',{width:0,backgroundColor: 'transparent',ease: Power1.easeIn, duration:.2},'<')
    .to('.box',{backgroundColor:"transparent", duration:.5})
    .from('.prova', {opacity:0,},0)
    .from('.arrow-1',{x:2.5,y:-2.5,})
    .from('.arrow-2',{x:2.5,y:2.5,},'<')
    .from('.arrow-3',{x:-2.5,y:-2.5,},'<')
    .from('.arrow-4',{x:-2.5,y:2.5,},'<')


    const cube = document.querySelector(".box")

    cube.addEventListener('mouseenter', playTimeline);
    cube.addEventListener('mouseleave', reverseTimeline);
    
    function playTimeline(e) {
      e.stopPropagation();
      tl.play();
    }
    
    function reverseTimeline(e) {
      e.stopPropagation();
      tl.timeScale(1.5);
      tl.reverse();
    }