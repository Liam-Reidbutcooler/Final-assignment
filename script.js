let circle = document.querySelector('.circle');
let moveBy = 1;
 
window.addEventListener('load', () => {
    circle.style.position = 'absolute';
    circle.style.left = 0;
    circle.style.top = 0;
});
 
 
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
       circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
       break;
       case 'ArrowRight':
       circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
        break;
        case 'ArrowUp':
         circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
       break;
        case 'ArrowDown':
       circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
        break;
    }
});

document.getElementById('button') .addEventListener('click', button)

function button () {
  document.getElementById('circleo').style.display = "none"
  document.getElementById('text').style.display = "none"
  document.getElementById('button').style.display = "none"
  document.getElementById('circle').style.display = "none"
  document.getElementById('text2').style.display = "block"
}