const passwordToggleBtn = document.getElementById('passwordHideButton');
const passwordInput = document.getElementById('password');
var i = document.getElementById('lid');

passwordToggleBtn.addEventListener('click', function() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    i.style.transform = "scaleX(1) scaleY(1)";
    i.classList.add('animateEye');
  } else {
    passwordInput.type = 'password';
    i.style.transform = "scaleX(1) scaleY(0)";
    i.classList.remove('animateEye');
  }
});

window.addEventListener("load", function () {
  skeletonAnimation.style.opacity = 0;
  main_image.style.opacity = 0.2;
});

function redirectToHomePage() {

  var BtnText = document.getElementById("login_btn_text");
  var loading = document.getElementById("load");

  if (BtnText.innerText === "Login") {

      BtnText.style.opacity = 0;
      loading.style.opacity = 1;

      document.getElementById("load").style.display = "flex";
      setTimeout(() => {
          document.getElementById("load").style.opacity = 1;
      }, 400);

      document.getElementById("login_btn_text").style.display = "none";
      setTimeout(() => {
        document.getElementById("login_btn_text").style.opacity = 0;
      }, 400);

      setTimeout(() => {
        window.location.href = 'HomePage.html';
      }, 1500);

  }
  else
  {
      BtnText.style.opacity = 1; // Reset opacity
      loading.style.opacity = 0; // Reset opacity
      document.getElementById("load").style.display = "none"; // Reset display
      document.getElementById("load").style.opacity = 0; // Reset opacity
      document.getElementById("login_btn_text").style.display = "block"; // Reset display
      document.getElementById("login_btn_text").style.opacity = 1; // Reset opacity

      // Reset the button text
      BtnText.innerText = "Login";
  }

}