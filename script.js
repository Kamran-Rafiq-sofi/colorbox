var letters = '0123456789ABCDEF';

var colorBox = document.getElementById("color-box");
colorBox.addEventListener('click',function(){
  let c=window.prompt("Do you like the colors")
  // window.box("hii like the colors im showing");
  if(c=="yes" || c=="Yes" || c=="YES"){
       window.alert("oh!! Thanks!");
}
else if(c=="no" || c=="No" || c=="NO" ){
  let d=window.prompt("why? would you please tell me the reason for this")

}
})

function getRandomColor() {
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  colorBox.style.backgroundColor = getRandomColor();
  setTimeout(changeColor, 1000);
}

changeColor();
