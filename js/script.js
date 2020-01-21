document.addEventListener('scroll', () => {

    const pixelsScrolled = window.scrollY || pageYOffset;
   // const fromBottom = document.getElementById('main').getBoundingClientRect().height-fromTop;
    // const downArrow = document.getElementById('downArrow');
  
    if (pixelsScrolled > 10) { 
        print("we are scrolling upwards")
    //   upArrow.style.display = 'block';
    } else {
    //   upArrow.style.display = 'none';
    print("we are scrolling downwards")
    }
  


    // if (pixelsScrolled > fromTop) {
    // //   downArrow.style.display = 'block';
    // } else {
    // //   downArrow.style.display = 'none';
    // }
  
  });