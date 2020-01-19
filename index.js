var Swiper = require("./utils/swiper.min.js");
import datePicker from "./utils/datepicker.js";
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
let sexs = document.querySelectorAll('.sex-warp span');
for (let i = 0; i < sexs.length; i++) {
    sexs[i].addEventListener('click',function() {
        var siblings = this.parentNode.children;
        for (let j = 0; j < siblings.length; j++) {
            siblings[j].classList.remove('on');
        }
        this.classList.add('on');
        localStorage.setItem('sex',this.innerText);
    })
}

(new datePicker).init('#birthday');

