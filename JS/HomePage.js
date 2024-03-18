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
        optionsList.classList.toggle('active');
    });

    optionsList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            selectedOption.textContent = event.target.textContent;
            optionsList.classList.remove('active');
            var selectedValue = event.target.getAttribute('data_value');
            console.log('Selected Value:', selectedValue);
        }
    });
});


function switchState(event,switchNumber) {
    event.stopPropagation();
    const bulb = document.getElementById(`bulb${switchNumber}`);
    const table_top = document.getElementById(`table_top${switchNumber}`);

    const bulb_states = ['bulb_running', 'bulb_pending', 'bulb_off'];
    const table_top_states = ['table_top_running', 'table_top_pending', 'table_top_off'];

    // Get current class index for bulb
    let bulbIndex = bulb_states.indexOf(bulb.classList[0]);
    if (bulbIndex === -1) {
        bulbIndex = 0; // Default to the first class if not found
    }

    // Get current class index for table_top
    let tableTopIndex = table_top_states.indexOf(table_top.classList[0]);
    if (tableTopIndex === 0) {
        tableTopIndex = 0; // Default to the first class if not found
    }

    // Toggle classes for bulb and table_top using the same index
    bulb.classList.remove(bulb_states[bulbIndex]);
    table_top.classList.remove(table_top_states[tableTopIndex]);

    bulbIndex = (bulbIndex + 1) % bulb_states.length;
    tableTopIndex = (tableTopIndex + 1) % table_top_states.length;

    bulb.classList.add(bulb_states[bulbIndex]);
    table_top.classList.add(table_top_states[tableTopIndex]);
}
