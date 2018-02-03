$(document).ready(function {

	// checkout tab events
	$('#tabOne').on('click', function(e) {
	  e.preventDefault()
	  $(this).tab('show')
	});

	$('#tabTwo').on('click', function(e) {
	  e.preventDefault()
	  $(this).tab('show')
	});

	$('#tabThree').on('click', function(e) {
	  e.preventDefault()
	  $(this).tab('show')
	});

	$('#continueSB').on('submit',function() {
		$('#tabOne').hide();
		$('#tabTwo').show();		
	});

})