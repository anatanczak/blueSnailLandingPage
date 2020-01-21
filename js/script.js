

document.addEventListener('scroll', () => {

    const pixelsScrolled = window.scrollY || pageYOffset;
    //TO DO: 1. Find out how we can get the initial rect that we can see in view point
  // const fromBottom = document.getElementById('main').getBoundingClientRect().height-fromTop;
    // const downArrow = document.getElementById('downArrow');
  const bgpic = document.getElementsByClassName('background-image-1')
    if (pixelsScrolled > 10) {
      console.log("we are scrolling downwards");
      //console.log(fromBottom)
      console.log(pixelsScrolled)
    //   upArrow.style.display = 'block';
    } else {
        //bgpic.style.display = none
    //   upArrow.style.display = 'none';
    //print("we are scrolling downwards")
    }



    // if (pixelsScrolled > fromTop) {
    // //   downArrow.style.display = 'block';
    // } else {
    // //   downArrow.style.display = 'none';
    // }

  });
