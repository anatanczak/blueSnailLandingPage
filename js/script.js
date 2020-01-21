document.addEventListener('scroll', () => {

    const pixelsScrolled = window.scrollY || pageYOffset;
   // const fromBottom = document.getElementById('main').getBoundingClientRect().height-fromTop;
    // const downArrow = document.getElementById('downArrow');
  const bgpic = document.getElementsByClassName('background-image-1')
    if (pixelsScrolled > 10) { 
       // print("we are scrolling upwards")
    //   upArrow.style.display = 'block';
    } else {
        bgpic.style.display = none
    //   upArrow.style.display = 'none';
    //print("we are scrolling downwards")
    }
  


    // if (pixelsScrolled > fromTop) {
    // //   downArrow.style.display = 'block';
    // } else {
    // //   downArrow.style.display = 'none';
    // }
  
  });