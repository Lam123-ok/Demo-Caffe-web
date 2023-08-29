let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active')
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  loginForm.classList.remove('active')
  searchForm.classList.remove('active')
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  loginForm.classList.remove('active')
}

window.onscroll = () =>{
  navbar.classList.remove('active');
  loginForm.classList.remove('active')
  searchForm.classList.remove('active')
}

const itemsliderbar = document.querySelectorAll(".category-left-li")
itemsliderbar.forEach(function(menu,index){
  menu.addEventListener("click", function(){
    menu.classList.toggle("block")
  })
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()){
      $('#backtop').fadeIn();
    }else{
      $('#backtop').fadeOut();
    }
  });
  $("#backtop").click(function(){
    $('html, body').animate({scrollTop: 0}, 300);
  });
});


function loader(){
  document.querySelector('.loader').style.display = 'none';
}

function fadeOut(){
  setInterval(loader, 2000);
}

window.onload = fadeOut;
