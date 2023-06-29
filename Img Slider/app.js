
var imgSeled = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg',
'img/img4.jpg','img/img5.jpg'];

var img = document.getElementById('imgCol');

var count = 0;
function next(){
  count++;
  if(count >= imgSeled.length){
    count = 0;
    img.src = imgSeled[count];
  }else{
    img.src = imgSeled[count];
  }
}

function prev () {
    count--;
    if(count < 0){
      count = imgSeled.length -1;
      img.src = imgSeled[count];
    }else{
      img.src = imgSeled[count];
    }
}