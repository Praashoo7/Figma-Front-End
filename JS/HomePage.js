/*------------------------- CUSTOM-DROPDOWN -------------------------*/

function accountDropdownOpen() {
    document.getElementById("account_menu").style.display = "flex";
    setTimeout(() => {
        document.getElementById("account_menu").style.opacity = 1;
    }, 100);
}
function accountDropdownClose() {
    setTimeout(() => {
        document.getElementById("account_menu").style.display = "none";
    }, 400);
    document.getElementById("account_menu").style.opacity = 0;
}


document.addEventListener('DOMContentLoaded', function () {
    var selectedOption = document.querySelector('.selected_option');
    var optionsList = document.querySelector('.options');

    selectedOption.addEventListener('click', function () {
        optionsList.classList.toggle('active'); // Toggle the active class
    });

    optionsList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            selectedOption.textContent = event.target.textContent;
            optionsList.classList.remove('active'); // Hide the options
            var selectedValue = event.target.getAttribute('data_value');
            console.log('Selected Value:', selectedValue);
        }
    });
});