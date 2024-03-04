$( function() {
	$( "#datepicker" ).datepicker({
		dateFormat: "dd-mm-yy"
		,	duration: "fast"
	});
} );
$( function() {
	$( "#datepicker1" ).datepicker({
		dateFormat: "dd-mm-yy"
		,	duration: "fast"
	});
} );


/*------------------------- CUSTOM-DROPDOWN -------------------------*/

document.addEventListener('DOMContentLoaded', function () {
	var selectedOption = document.querySelector('.selected_option');
	var optionsList = document.querySelector('.options');
  
	selectedOption.addEventListener('click', function () {
		optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
	});
  
	optionsList.addEventListener('click', function (event) {
		if (event.target.tagName === 'LI') {
			selectedOption.textContent = event.target.textContent;
			optionsList.style.display = 'none';
			// Optionally, you can use the selected value (data-value attribute)
			var selectedValue = event.target.getAttribute('data_value');
			console.log('Selected Value:', selectedValue);
		}
	});
  });