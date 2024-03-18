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

  BtnText.style.opacity = 0;
  loading.style.opacity = 1;

  setTimeout(() => {
    window.location.href = 'HomePage.html';
  }, 1500);

}