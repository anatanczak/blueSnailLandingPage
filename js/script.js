//jshint esversion: 6
const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {

  const currentScroll = window.pageYOffset;
  if (currentScroll == 0 || currentScroll < 10) {
    console.log("we are not scrolling");
    return;
  }else{
    console.log(currentScroll);
    return;
  }
  });
