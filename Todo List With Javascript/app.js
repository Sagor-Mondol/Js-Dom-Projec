

const input = document.getElementById('inputFil');
const btn = document.getElementById('btn');
const addText = document.getElementById('add-text');

btn.addEventListener('click', function() {
    if(input.value == ''){
        alert('warning-text');
    }else{
      const netText = document.createElement('p');
      netText.innerHTML = input.value;
      addText.appendChild(netText);
      input.value = '';
    }
})