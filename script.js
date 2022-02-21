
//interactivity 1
// popup cat around screen


setInterval(function(){

//var popupCat = document.querySelector('.popupcat');
var popupCat = document.createElement('div');
popupCat.classList.add('popupcat');
// popupCat.style.position = "absolute";
// popupCat.style.width = "50px";
// popupCat.style.height = "50px";
 popupCat.style.top = window.innerHeight * Math.random() + "px";
 popupCat.style.left = window.innerWidth * Math.random() + "px";
// popupCat.style.backgroundImage = "url(images/popupcat.png)";

popupCat.addEventListener('click', function(){
    popupCat.remove();
});

document.body.appendChild(popupCat);

console.log("added cat");

}, 10000);


// interactivity 2
// another pop up from link
var overlay = document.querySelector('.overlay');
var popup = document.getElementById('popup');

popup.addEventListener('click', function(){

overlay.style.display = "block";
overlay.style.zIndex = "3";

});

overlay.addEventListener('click', function(){

  overlay.style.display = "none";
});


//interactivity 3
//interactive footer
function getRelativeCoordinates(mouse, element){
  let rect = element.getBoundingClientRect();
  return {
    x: mouse.clientX - rect.left,
    y: mouse.clientY - rect.top
  };
}

var footer = document.getElementsByClassName('footer');

for(let i = 0; i < footer.length; i++)
{

  footer[i].addEventListener('mousemove', function(mouse){
  coords = getRelativeCoordinates(mouse, footer[i]);

    coords.x /= footer[i].clientWidth;
    coords.y /= footer[i].clientHeight;

    footer[i].style.backgroundColor = 'rgb(255, '+ 255 * coords.x +', '+ 255 * coords.y +')';
  });

}
