$(function(){
  $('input[type=submit').click(sendData);
})

function sendData(e) {
  e.preventDefault();
  
  if (!$('form')[0].checkValidity()) {
    $('#incorrect').show();
    return;
  }
  
  $.ajax({
    url: "https://formspree.io/koldovsky@gmail.com", 
    method: "POST",
    data: {
      name: $('#name').val(),
      comment: $('#comment').val()
    },
    dataType: "json"
  }).done(function(){
    $('form')[0].reset();
    $('#thanks').show();
  })
}