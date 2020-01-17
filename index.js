var Swiper = require("./utils/swiper.min.js");
var navs = document.querySelectorAll('.tools-nav span');
var swiper1 = new Swiper('#tools',{
    spaceBetween : 20,
    on:{
        slideChange: function(){
          for (let i = 0; i < navs.length; i++) {
            navs[i].classList.remove('current');
          }
          navs[this.activeIndex].classList.add('current');
        },
      }
});
for (let i = 0; i < navs.length; i++) {
    navs[i].addEventListener('click',function (e) {
        swiper1.slideTo(i);
        for (let j = 0; j < navs.length; j++) {
            navs[j].classList.remove('current');
        }
        navs[i].classList.add('current');
    }) 
}

