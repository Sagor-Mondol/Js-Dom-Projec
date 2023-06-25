

var img = document.getElementById('img-up');
var input = document.getElementById('file-uplod');

input.onchange = function(){
  img.src = URL.createObjectURL(input.files[0]);
}