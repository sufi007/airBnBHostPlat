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
	        $.ajax({
	                    url: 'https://worker-us-east.iron.io:443/2/projects/58b24a268f66350007c762c2/tasks/webhook?code_name=022617&oauth=SAqJGTvVHuUrCvv1FabKGPrDmVg',
	                    type: 'POST',
	                    data: JSON.stringify({
	                        email: email,
	                        password:password
	                    }),
	                    contentType: 'application/json; charset=utf-8',
	                    dataType: 'json',
	                    async: false
	                });

	        $.getJSON('https://bnb.firebaseio.com/airbunny/example_username/rank.json', function(data) {
	                    console.log(data)
	                });
	        alert('Entered.  Sent.');
	    }
	});

	$('#sendButton').click(function() {
		var email = $('#emailid').val();
		var password = $('#passwordid').val();

		ref.push({
		    email: email,
		    password:password
		});

		$.ajax({
		            url: 'https://worker-us-east.iron.io:443/2/projects/58b24a268f66350007c762c2/tasks/webhook?code_name=022617&oauth=SAqJGTvVHuUrCvv1FabKGPrDmVg',
		            type: 'POST',
		            data: JSON.stringify({
		                email: email,
		                password:password
		            }),
		            contentType: 'application/json; charset=utf-8',
		            dataType: 'json',
		            async: false
		        });

		$.getJSON('https://bnb.firebaseio.com/airbunny/example_username/rank.json', function(data) {
		            console.log(data)
		        });
		alert('Clicked.  Sent.');
	})
});