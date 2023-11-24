// Cambio de imagenes  //
document.addEventListener("DOMContentLoaded", function () {
  var imageContainer = document.getElementById("imageContainer");
  var images = document.querySelectorAll(".infoimage");
  var currentImageIndex = 0;
  var intervalId;

  function changeImage(index) {
    images[currentImageIndex].style.display = "none";
    currentImageIndex = index;
    images[currentImageIndex].style.display = "block";
  }

  function autoChangeImage() {
    changeImage((currentImageIndex + 1) % images.length);
  }

  function startAutoChange() {
    intervalId = setInterval(autoChangeImage, 7000);
  }

  function stopAutoChange() {
    clearInterval(intervalId);
  }

  document.getElementById("btnImage1").addEventListener("click", function () {
    stopAutoChange();
    changeImage(0);
  });

  document.getElementById("btnImage2").addEventListener("click", function () {
    stopAutoChange();
    changeImage(1);
  });

  startAutoChange();
});


// NavBar //
document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector('.nav');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      nav.classList.add('small');
    } else {
      nav.classList.remove('small');
    }
  });
});
