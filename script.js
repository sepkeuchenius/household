document.querySelector('.mdl-layout__drawer').addEventListener('click', function () {
    document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');
    this.classList.remove('is-visible');
}, false);
var drawer = document.getElementsByClassName('mdl-layout__drawer')[0];

var database = firebase.database()

function login(){
  $('#landing').hide()
  $('#login').show()
}
function signup(){
  $('#landing').hide()
  $('#signup').show()
}
