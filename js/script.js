//jshint esversion: 6
const body = document.body;
let lastScroll = 0;
var arrow = document.getElementById('animated-arrow');
window.addEventListener('scroll', () => {

  const currentScroll = window.pageYOffset;
  if (currentScroll == 0 || currentScroll < 10) {
//TO DO see if we can toggle class with classList.toggle
    arrow.classList.remove("hidden-arrow");
    return;
  }else{
    arrow.classList.add("hidden-arrow");

  }
  });
