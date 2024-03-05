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