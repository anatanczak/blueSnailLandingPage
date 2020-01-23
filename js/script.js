//jshint esversion: 6
const body = document.body;
let lastScroll = 0;
var errow = document.getElementById('animated-arrow');
window.addEventListener('scroll', () => {

  const currentScroll = window.pageYOffset;
  if (currentScroll == 0 || currentScroll < 10) {
//TO DO see if we can toggle class with classList.toggle
    errow.classList.remove("hidden-arrow");
    errow.classList.add('visible-arrow');
    return;
  }else{
    errow.classList.remove('visible-arrow');
    errow.classList.add("hidden-arrow");

  }
  });
