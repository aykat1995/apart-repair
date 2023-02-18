$(document).ready(function(){

  $('#button').on('click', function(){
    $('#modal').addClass('modal_active');
  });

  $('#close').on('click', function(){
    $('#modal').removeClass('modal_active');
  });

});
