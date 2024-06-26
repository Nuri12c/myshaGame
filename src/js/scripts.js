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
    }
    setTimeout (function() {
      cat.classList.remove('jump')
    }, 500)
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
