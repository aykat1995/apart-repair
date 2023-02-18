let button = document.querySelector('#button');
let modal = document.querySelector('#modal');
let close = document.querySelector('#close');

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
});
close.addEventListener('click', function() {
  modal.classList.remove('modal_active');
});