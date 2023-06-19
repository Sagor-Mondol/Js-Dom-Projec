// Step 1 - Create onload handler

// window.onload = () => {
//   mai();
// }

function mai(){
  var root = document.getElementById('root');
  var btn = document.getElementById('chang-button');

  btn.addEventListener('click', function(){
    var bgColor = generatorColor();
    root.style.backgroundColor = bgColor
  })
}

mai();

// Step 2 - random color generator funcation 
    function generatorColor(){
      var red = Math.floor(Math.random() * 255);
      var green = Math.floor(Math.random() * 255);
      var blue = Math.floor(Math.random() * 255);

      return `rgb(${red}, ${green}, ${blue})`
    }
// Step 3 - collect all necessary reference

// Step 4 - handel the click event

