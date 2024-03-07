/* --------------------- POPUP --------------------- */

function openPop(ID) {

    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.disabled = true;
    });
  
    document.getElementById(ID).style.opacity = "1";
    document.getElementById(ID).style.zIndex = "99";
    document.querySelector("body").style.overflow = "hidden";
  }
  function closePop(ID) {
  
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.disabled = false;
    });
  
    document.getElementById(ID).style.opacity = "0";
    document.getElementById(ID).style.zIndex = "-2";
    document.querySelector("body").style.overflow = "auto";
  }