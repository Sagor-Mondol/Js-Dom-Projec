// Step 1 - Create onload handler

// window.onload = () => {
//   mai();
// }

(function main(){
  var root = document.getElementById('root');
  var changBtn = document.getElementById('chang-button');
  var outPut = document.getElementById('output');
  var copyBtn = document.getElementById('btn');


  changBtn.addEventListener('click', function(){
    var bgColor = generatorHexColor();
    root.style.backgroundColor = bgColor
    outPut.value = bgColor
  });
 copyBtn.addEventListener('click', function(){
   navigator.clipboard.writeText(outPut.value);
 });

})();



// Step 2 - random color generator funcation 
    function generatorHexColor(){
      var red = Math.floor(Math.random() * 255);
      var green = Math.floor(Math.random() * 255);
      var blue = Math.floor(Math.random() * 255);

      return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    }

