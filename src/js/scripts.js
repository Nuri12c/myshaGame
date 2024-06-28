document.addEventListener("DOMContentLoaded", () => {
  const cat = document.getElementById('cat')
  const chair = document.getElementById("chair");
  document.addEventListener('keydown', function(event) {
    jump();
  })
  document.addEventListener("touchstart", function (event) {
    jump();
  });
  function jump() {
    if (cat.classList != 'jump') {
      cat.classList.add('jump')
      cat.style.backgroundImage = "url(../../src/assets/img/catJump.png)";
    }
    setTimeout(function () {
      cat.style.backgroundImage = "url(../../src/assets/img/catJump2.png)";
    }, 300);
    setTimeout (function() {
      cat.classList.remove('jump')
      cat.style.backgroundImage = "url(../../src/assets/img/myCat.gif)";
    }, 700)
    
  }
  
});
let isAlive = setInterval( function() {
  let catTop = parseInt(window.getComputedStyle(cat).getPropertyValue("top"));
  let chairLeft = parseInt(window.getComputedStyle(chair).getPropertyValue("left"));

  if (chairLeft < 50 && chairLeft > 0 && catTop >= 130) {
    alert("GAME OVER");
    chair.classList.remove('chairMov')
    setTimeout(function () {
      chair.classList.add("chairMov");
    }, 0);
  }
}, 10);
