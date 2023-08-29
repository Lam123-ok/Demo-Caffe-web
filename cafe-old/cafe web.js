//header section
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.remove('active');
  cartItem.classList.remove('active');
  navbar.classList.toggle('active');
}

let cartItem = document.querySelector('.cart-item-container');
document.querySelector('#cart-btn').onclick = () =>{
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  cartItem.classList.toggle('active');
}

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
  navbar.classList.remove('active');
  cartItem.classList.remove('active');
  searchForm.classList.toggle('active');
}

//Tạo slide chuyển ảnh
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 3){
    counter = 1;
  }
}, 5000) 

