//define functions here

function getIt() {
  $('p').on('click', function() {
    alert('hey!')
  })
}

function frameIt () {
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $("form").on('keydown', function (key){
    if(key.which == 71) {
      alert ('G was pressed')
    }
  })
}

function submitIt () {
  $('form').on("submit", function (key){
    alert("Your form is going to be submitted now.")
      })
}
