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

  // Check if the page is being loaded for the first time or being shown again after navigation
  if (history && history.state && history.state.reset) {
      // Reset changes if the page is being shown again after navigation
      BtnText.style.opacity = 1;
      loading.style.opacity = 0;
      document.getElementById("load").style.display = "none";
      document.getElementById("load").style.opacity = 0;
      document.getElementById("login_btn_text").style.display = "block";
      document.getElementById("login_btn_text").style.opacity = 1;
  } else {
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
}